# ML1503 – Web Programming (Lab Integrated)
## List of Experiments (Short, Concise, Exam-Oriented Solutions)

---

### Folder & File Index

| Experiment | Folder | Files | Description |
| :--- | :--- | :--- | :--- |
| **1. HTML Elements** | [`exp1/`](./exp1/) | [`exp1.html`](./exp1/exp1.html) | Webpage demonstrating all HTML elements (Headings, bold/italic/underline, links, image, lists, table, form with text, radio, checkbox, dropdown, buttons). |
| **2. CSS Types & Selectors** | [`exp2/`](./exp2/) | [`exp2.html`](./exp2/exp2.html)<br>[`style.css`](./exp2/style.css) | Webpage with all 3 types of CSS (Inline, Internal, External) and CSS Selectors (Element, Class, ID, Universal `*`). |
| **3. DHTML Validation, DOM Slideshow & Quiz** | [`exp3/`](./exp3/) | [`3_validation.html`](./exp3/3_validation.html)<br>[`3a_slideshow_clock.html`](./exp3/3a_slideshow_clock.html)<br>[`3b_quiz.html`](./exp3/3b_quiz.html) | • `3_validation.html`: Form validation using DHTML (Name, Email, Password).<br>• `3a_slideshow_clock.html`: Image slide show and live digital clock using JS & DOM.<br>• `3b_quiz.html`: Web application for online quiz system with score. |
| **4. Angular Directives** | [`exp4/`](./exp4/) | [`exp4.html`](./exp4/exp4.html) | Built-in Angular directives: `ng-app`, `ng-controller`, `ng-model`, `ng-show` / `ng-hide` (toggle element), and `ng-repeat` (list). |
| **5. AngularJS Shopping Cart** | [`exp5/`](./exp5/) | [`exp5.html`](./exp5/exp5.html) | Shopping cart application selecting items across different categories, displaying selected items and total price upon clicking Submit. |
| **6. Supermarket CLI & AngularJS Table** | [`exp6/`](./exp6/) | [`6a_search.js`](./exp6/6a_search.js)<br>[`6b_table.html`](./exp6/6b_table.html) | • `6a_search.js`: Command Line Application using Node.js & MongoDB searching products by ID or Name.<br>• `6b_table.html`: AngularJS table displaying product details of different brands sorted by Price (`orderBy:'price'`). |
| **7. REST API & AJAX** | [`exp7/`](./exp7/) | [`server.js`](./exp7/server.js)<br>[`client.html`](./exp7/client.html) | • `server.js`: REST API using Express.js (`GET` & `POST` `/api/products`).<br>• `client.html`: AJAX application fetching and posting data dynamically without page reloads. |

---

### How to Run

1. **HTML/CSS/AngularJS Files (Exp 1, 2, 3, 4, 5, 6b, 7 client):**
   - Double-click the `.html` file to open in Chrome or any browser.
   - For AngularJS and APIs (Exp 4, 5, 6b), an active internet connection loads the CDN script.

2. **Exp 6(a) - Node.js + MongoDB CLI:**
   - In terminal:
     ```bash
     cd exp6
     npm install mongodb
     node 6a_search.js
     ```

3. **Exp 7 - Express REST API + AJAX:**
   - In terminal:
     ```bash
     cd exp7
     npm install express cors
     node server.js
     ```
   - Then open `client.html` in your browser.
