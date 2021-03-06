(ns example.domain
  (:require [schema.core :as s :include-macros true]
            [cljs-time.core :as t]))

(def LocalDate goog.date.Date)

(defn inside-date-range? [start end x]
  (and (or (not start) (.equals x start) (t/after?  x start))
       (or (not end)   (.equals x end)   (t/before? x end))))

(def email-pattern (js/RegExp. "^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}$" "i"))

(s/defschema Thingie
  {:name (s/constrained s/Str seq)
   :email (s/constrained s/Str #(re-find email-pattern %) 'email)
   :dates {:start LocalDate
           :end   (s/maybe LocalDate)}
   :desc s/Str
   :file (s/maybe (s/constrained js/File (fn [f] (if f (< (.-size f) 1000000))) 'large-file))
   :country s/Str
   :reasons #{s/Keyword}
   :gender s/Keyword})

; FIXME: Use s/constrained on Thingie
(defn ThingieDates [{{:keys [start end]} :dates}]
  (-> Thingie
      (update-in [:dates :start]  (fn [s] (s/constrained s #(inside-date-range? (t/today) end %))))
      (assoc-in  [:dates :end]    (s/maybe (s/constrained LocalDate #(inside-date-range? start nil %))))))

; Description of the state tree
(def empty-thing
  {:name ""
   :email "luke@rebel.gov"
   :dates {:start (t/today)
           :end   nil}
   :desc ""
   :file nil
   :country "FI"
   :reasons #{:a :b}
   :gender :other})

(def genders {:male   "Male"
              :female "Female"
              :other  "Other"})
