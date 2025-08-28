# 🍔 Swiggy Clone - Food Ordering App

A Swiggy-inspired food ordering app built with React 18 and Parcel as the bundler, designed for fast performance and a seamless user experience.

🚀 Features

✅ Built with React 18 – Leverages concurrent rendering for better performance.

✅ Super-fast bundling with Parcel – Zero-config, lightning-fast builds.

✅ Swiggy-like UI & UX – Clean, intuitive, and user-friendly interface.

✅ Dynamic Restaurant Listings – Fetch and display real-time restaurant data.

✅ Smooth Cart Experience – Add, update, and remove items seamlessly.

✅ Optimized Performance – Efficient state management and component rendering.

🛠️ Tech Stack

    Frontend: React 18, React Hooks
    Bundler: Parcel
    State Management: Redux Toolkit 
    Routing: React Router
    Styling: CSS 
    Toast Notifications
    Font Awesome Icons

# 🔧 Installation & Setup

- Clone the repository

```sh
git clone https://github.com/rahulsahay19/food-ordering-app.git
cd food-ordering-app
```

- Install dependencies

```sh
 npm install
```

- Setup API

```sh
json-server --watch src/data/db.json --port 3001 (run the endpoint separetly)

http://localhost:3001/restaurants - API can be accessed here
```
- Run the development server

```sh
npm start
```
# 📷 Screenshots

- Landing Page
![Image](https://github.com/user-attachments/assets/e321596b-1592-4896-aef1-b23bd6a8a207)

- Top Rated Restaurants

![Image](https://github.com/user-attachments/assets/c904a1b0-ff01-45e8-89d7-0e7947a7c2ea)

- Search

![Image](https://github.com/user-attachments/assets/71aa30b0-188b-4d4a-87ff-947a78c975dd)

- View Menu

![Image](https://github.com/user-attachments/assets/06ea26ad-afcc-485a-9875-bebbfb08df46)


- Add to Cart

![Image](https://github.com/user-attachments/assets/0782b89e-e754-41f8-a6e6-428ae399142f)

- Cart Page

![Image](https://github.com/user-attachments/assets/9137eedc-3564-4abc-9c8d-76e0df3ff97e)

- Checkout Flow

![Image](https://github.com/user-attachments/assets/2a50e58b-50fa-42eb-a7aa-1daab3341cf7)


![Image](https://github.com/user-attachments/assets/644f6261-8584-4d27-b4c4-c3705c98e268)

![Image](https://github.com/user-attachments/assets/c9c9b3be-ccce-4bce-ae2d-352e9febe25b)

# Solution Walkthrough

![Image](https://github.com/user-attachments/assets/7cb8b185-6283-46bb-a8b7-af1028554f49)

# API Walkthrough

![Image](https://github.com/user-attachments/assets/07688daf-1586-49a9-af95-3e2d2c92738e)

# Parcel Features
- Dev Build
- Local Server
- HMR
- File Watching Algo
- Caching - Builder faster builds
- Image optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Code Splitting
- Differential Bundling
- Diagnostic
- Error Handling
- Also allows to host in HTTPs
- Tree Shaking
- Different Dev & Prod bundles

# Json server settings
- npm install -g json-server
- create db.json file
- json-server --watch src/data/db.json --port 3001 (run the endpoint separetly)
- http://localhost:3001/restaurants - can be accessed here

# Parcel clean
- rm -rf .parcel-cache

# Batch-8 Routing
- npm i react-router-dom . Use version 6+. 7+ is unstable at the time of recording.

# Redux
- Clicking on Add button will dispatch an action and call reducer.
- Which updates the slice of redux store.
- Cart component is subscribed to the store using a selector.
- Since the component is subscribed to store using a selector, cart will automoatically updated.

# Steps
- Install @redux/toolkit & react-redux
- Build our store
- Connect our atore to our app
- Slice (CartSlice)
- dispatch an action
- selector
- npm install redux-persist