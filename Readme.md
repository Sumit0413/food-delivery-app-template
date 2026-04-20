# 🍔 Food Delivery App (React + Redux + Tailwind)

## 🎯 Objective

Build a **Food Delivery Application** using:

* React (component-based UI)
* Redux Toolkit (state management)
* Tailwind CSS (modern styling)

This project is designed as a **frontend coding assignment system**, where your implementation is **automatically evaluated using tests and GitHub Actions**.

---

## 🧠 How This Project Works

This repository simulates a **real-world frontend assignment**:

1. You are given a starter React project
2. You implement UI and functionality
3. You push your code
4. Automated tests run
5. You get PASS or FAIL

---

## 📁 Project Structure

```id="fs2m2d"
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── FoodList.jsx
│   ├── FoodCard.jsx
│   └── Cart.jsx
│
├── redux/
│   ├── store.js
│   └── cartSlice.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 📌 Requirements

---

### 🔹 1. Navbar

* Displays app name
* Simple header UI

---

### 🔹 2. Food List

* Display at least **3 food items**

---

### 🔹 3. Food Card

Each food item must include:

* Name
* Price
* "Add to Cart" button

---

### 🔹 4. Cart

* Display selected items
* Update dynamically

---

## ⚙️ Functionality (IMPORTANT)

---

### 🟢 Add to Cart

* Clicking button should:

  * Add item to Redux store
  * Update cart UI

---

### 🟢 State Management

Use **Redux Toolkit**:

* Store cart items
* Use:

  * `useDispatch`
  * `useSelector`

---

## 🎨 Styling

* Use **Tailwind CSS**
* Apply:

  * Flex/grid layout
  * Spacing and colors
  * Responsive design (optional)

---

## 🧪 Testing (Automatic)

Tests check:

* Food items render correctly
* Cart section exists
* UI components load properly

---

## ⚠️ Important for Tests

Wrap app with Redux Provider:

```id="p1c3w7"
<Provider store={store}>
  <App />
</Provider>
```

---

## ⚙️ GitHub Actions (CI/CD)

After pushing your code:

* Tests run automatically
* No manual checking required
* Results visible in **Actions tab**

---

## 🚀 How to Run Locally

```bash id="2m8kfl"
npm install
npm run dev
```

---

## 🚀 How to Submit

```bash id="y9u4xm"
git add .
git commit -m "Completed food delivery app"
git push
```

---

## 📊 Result

* 🟢 PASS → All requirements satisfied
* 🔴 FAIL → Fix and push again

---

## 🛠️ Debugging Tips

If tests fail:

* Check component names
* Ensure Redux is connected
* Verify cart updates correctly
* Check for missing UI elements

---

## ❌ Common Mistakes

Wrong:

```id="t2p9ye"
<button>Add</button>
```

Correct:

```id="h2v8gf"
<button onClick={...}>Add to Cart</button>
```

---

## 🔥 Project Purpose

This project simulates:

* Frontend hiring assignments
* Real-world UI + state management tasks
* Component-based architecture

---

## 🎯 Final Goal

> ✔ Build UI using React
> ✔ Manage state using Redux
> ✔ Style using Tailwind
> ✔ Pass all test cases

---

## 🚀 Bonus (Optional)

* Add quantity handling
* Add total price calculation
* Add remove item feature
* Improve UI design

---

Good luck 🚀
