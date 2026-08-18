# Fraction Plus Calculator

A flexible, web-based fraction calculator designed to handle whole numbers, numerators, and denominators independently. It offers support for both standard arithmetic and ancient base-scaling conversions (Base-60, Base-360, Base-24).

---

## 🌟 Key Features

* **Segmented Color-Coded Keypad:** Separate keypads for **Whole Numbers**, **Numerators**, and **Denominators** to make mixed fraction entry simple and intuitive.
* **Live Display Screen:** Visual indicator boxes highlight which segment you are currently editing in real time.
* **Multi-Base Scaler (Ancient Base Mode):** Convert proper fractions directly into time or angular sub-units:
  * **Base-60:** Ghatis / Minutes
  * **Base-360:** Degrees (°)
  * **Base-24:** Hours
  * **Base-1:** Standard Fraction Mode
* **Automatic Simplification:** Computes improper fractions into fully simplified mixed fractions automatically.
* **Responsive Design:** Optimized for both mobile touchscreen displays and desktop web browsers.

---

## 🚀 How to Use

1. **Enter a Mixed Fraction:**
   * Tap digits under **WHOLE NUMBER** to set the whole integer.
   * Tap digits under **NUMERATOR (TOP)** to set the top value.
   * Tap digits under **DENOMINATOR (BOTTOM)** to set the bottom value.
2. **Perform Operations:**
   * Select an operator (`+`, `−`, `×`, `÷`).
   * Enter the second fraction in the same manner.
   * Press `=` to calculate the result.
3. **Toggle Ancient Scaling:**
   * Turn **Ancient Scale: ON** and select a Base (e.g., Base-60) to see proper fractions expanded into sub-units (e.g., `12/35` converted to `20 4/7 Ghatis/Mins`).
   * Turn **Ancient Scale: OFF** to keep standard fraction representations.

---

## 🛠️ Technology Stack

* **HTML5** — Structure & Layout
* **CSS3** — Custom Properties, CSS Grid, and Flexbox styling
* **JavaScript (Vanilla)** — State management, fraction arithmetic, and Greatest Common Divisor (GCD) reduction logic

---

## 💻 Local Setup

1. Clone or download this repository:
   ```bash
   git clone [https://github.com/your-username/fraction-plus-calculator.git](https://github.com/your-username/fraction-plus-calculator.git)
