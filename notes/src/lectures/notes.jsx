import React from 'react';
import './notes.css'; // import the CSS

export default function HMRInfo() {
  return (
    <div className="hmr-container">
      <h4>What is a React component? It is a React element whose type is a function and returns JSX.</h4>
      <h4>🔥 Hot Module Replacement (HMR) – In Layman’s Terms:
Imagine this:

You're baking a cake. You forgot to add sugar.
Instead of throwing away the whole cake and starting over, you just open the oven, quickly add sugar, and let it continue baking — without restarting the whole process.

💡 Now, apply that to coding:
When you're coding a web app, normally if you change some code (like a button’s color or text), the app reloads completely to show the update — and you lose the current state (like form inputs or scroll position).

With Hot Module Replacement (HMR):

You change a small part of your code (say, a component).

HMR only reloads that part — not the entire app.

You keep your app's state (e.g. filled inputs, open modals).

It makes development much faster and smoother.

📦 Example with React:
You change the text on a button.

HMR replaces just that button component live, in the browser.

No full page refresh. You see the change instantly.

⚙️ Tools that support HMR:
Webpack

Vite

Parcel

Next.js

React Fast Refresh

🧠 Summary:
Hot Module Replacement = updating just the changed code instantly in the browser without a full reload — keeping the app running without losing anything.</h4>
    </div>
  );
}