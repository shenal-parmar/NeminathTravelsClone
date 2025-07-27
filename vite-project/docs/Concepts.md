# Neminath Travels Website Clone 
### 1. CarCard Component

- # Object: CarCard  
- # Context: Displays route, trip type, car prices, and a "Book Now" action for each favorite travel route  
- # Important Information:
  - Props: `tripName`, `tripType`, `prices.sedanPrice`, `prices.suvPrice`
  - WhatsApp integration with `window.open("https://wa.me/919876543210?text=...")`
  - Rendered dynamically through fetched route data

---

### 2. CarList Component

- # Object# : CarList  
- # Context# : Lists multiple CarCard components for favorite routes  
- # Important Information# :
  - Fetches from `https://alliedge.com/neminath/api/ourfavRoutes`
  - Passes individual route data to `CarCard`
  - Displays in grid layout (`grid-cols-3`)

---

### 3. CarDetail Component

- # Object# : CarDetail  
- # Context# : Displays detailed car specifications using live API data  
- # Important Information# :
  - Fetched from `https://alliedge.com/neminath/api/ourvehicale`
  - Shows `carImage`, `carName`, `Textfiled1` to `Textfiled4`
  - Each car has a WhatsApp-based “Book Now” button

---

### 4. Booking Form (BookCar)

- # Object# : Booking Form  
- # Context# : Collects booking details visually from the user  
- # Important Information# :
  - Fields: Car type, pickup location, drop-off, pickup date
  - Styled with Tailwind CSS
  - Currently non-functional form; could be integrated with backend or WhatsApp

---

### 5. PopularRoutes Component

- # Object# : Popular Routes  
- # Context# : Lists top cities and their popular travel routes  
- # Important Information# :
  - Cities fetched from: `.../api/populercity/names`
  - Route details fetched from: `.../api/populercity`
  - Cities are linked via dynamic route: `/cityDescription/:id`

---

### 6. WhatsApp Integration

- # Object# : Booking Link  
- # Context# : Enables direct communication with admin via WhatsApp  
- # Important Information# :
  - Number used: `+91 9876543210` → `919876543210`
  - Format: `https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20book%20a%20taxi.`
  - Used in `CarCard`, `CarDetail`, and Benefits sections

---

### 7. Tailwind CSS

- # Object# : Styling  
- # Context# : Used throughout for responsive UI and clean layout  
- # Important Information# :
  - Utility-first CSS: `bg-orange-600`, `text-center`, `rounded-2xl`, etc.
  - Responsive grids: `grid-cols-3`, `max-w-7xl`, `p-5`

---

### 8. App Routing

- # Object# : React Router  
- # Context# : Handles client-side navigation across components  
- # Important Information# :
  - Uses `<Routes>` and `<Route>` from `react-router-dom`
  - Dynamic route: `/cityDescription/:id`
  - Pages: `/home`, `/about`, `/gallery`, `/availableCars`, etc.

---

### 9. Contact Us Page

- # Object# : ContactUs Component  
- # Context# : Provides business contact details and a message form  
- # Important Information# :
  - Displays phone, email, address
  - Includes embedded Google Map of office location
  - Form fields: name, email, mobile, message

---

### 10. About Us Page

- # Object# : About Component  
- # Context# : Highlights company mission and services  
- # Important Information# :
  - Contains intro text about Neminath Travels
  - Includes static image and embedded Services component

---
 11. Benefits Section

- # Object# : Benefits Component  
- # Context# : Showcases reasons to choose Neminath Travels  
- # Important Information:
  - Items: Comfortable Rides, Affordable Prices, Easy Booking
  - Includes icons and call-to-action WhatsApp button

---

### 12. Tech Stack

- # Frontend#: React, Tailwind CSS  
- # Icons# : FontAwesome  
- # Routing# : `react-router-dom`  
- # API# : REST (`fetch` from Alliedge/Neminath API)  
- # WhatsApp Booking# : `wa.me` API integration

---



