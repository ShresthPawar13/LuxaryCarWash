# AquaShine Auto Spa — Backend API 🚿✨

Backend REST API for **AquaShine Auto Spa**, built with **Node.js**, **Express**, and **MongoDB**. Handles online wash slot bookings, real-time bay capacity checks, automatic loyalty tracking (6th wash free), WhatsApp booking redirect generation, customer enquiries, and protected admin booking management.

---

## Tech Stack
* **Runtime & Framework:** Node.js, Express.js (ES Modules)
* **Database:** MongoDB with Mongoose ODM
* **Integrations:** Automated WhatsApp `wa.me` Booking & Enquiry Link Generator
* **Security:** Header-based Admin API Key authentication (`x-admin-key`), CORS, server-side input validation

---

## Project Structure

```text
LuxaryCarWash/
├── src/
│   ├── config/
│   │   └── db.js                  # MongoDB connection setup
│   ├── controllers/
│   │   ├── bookingController.js   # Slot checks, loyalty counter, booking & admin logic
│   │   └── enquiryController.js   # Contact form enquiry handling
│   ├── data/
│   │   └── servicesCatalog.js     # Bike, Car & Detailing packages + time slots
│   ├── middleware/
│   │   └── adminAuth.js           # Protects /admin endpoints via x-admin-key
│   ├── models/
│   │   ├── Booking.js             # Booking schema + auto-generated AQS-XXXX codes
│   │   └── Enquiry.js             # Customer enquiry schema
│   ├── routes/
│   │   ├── bookingRoutes.js       # Public & admin booking routes
│   │   ├── enquiryRoutes.js       # Public & admin enquiry routes
│   │   └── serviceRoutes.js       # Service catalog routes
│   ├── utils/
│   │   └── whatsappHelper.js      # Pre-filled WhatsApp URL builder
│   └── server.js                  # App entry point
├── .env                           # Local environment variables (ignored in Git)
├── .gitignore
└── package.json

Local Setup
Clone the repository and install dependencies:

Bash
git clone [https://github.com/ShresthPawar13/LuxaryCarWash.git](https://github.com/ShresthPawar13/LuxaryCarWash.git)
cd LuxaryCarWash
npm install
Configure environment variables:
Create a .env file in the root directory and add:

Code snippet
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/aquashine_autospa
ADMIN_API_KEY=aquashine_admin_2026
SHOP_WHATSAPP_NUMBER=919876543210
Start the development server:

Bash
npm run dev
API Endpoints
Public Customer Endpoints
Method	Endpoint	Description
GET	/api/health	Health check status
GET	/api/services	Fetch all Bike/Car packages & time slots (supports ?category=bike or ?category=car)
GET	/api/bookings/slots?date=YYYY-MM-DD	Check remaining bay capacity per time slot (max 3 vehicles/slot)
POST	/api/bookings	Create a new booking, evaluate 6th-wash loyalty reward, and return whatsappUrl
GET	/api/bookings/loyalty/:phone	Check completed wash count and remaining washes until free reward
POST	/api/enquiries	Submit a general/corporate enquiry and return whatsappUrl
Protected Admin Endpoints
(Requires header: x-admin-key: <ADMIN_API_KEY>)

Method	Endpoint	Description
GET	/api/bookings/admin/all	List all bookings (supports ?date=YYYY-MM-DD & ?status=Pending) + completed revenue
PATCH	/api/bookings/admin/:id/status	Update status (Pending, Confirmed, In Progress, Completed, Cancelled)
GET	/api/enquiries	List all customer enquiries
PATCH	/api/enquiries/:id/resolve	Mark an enquiry as resolved

---

### Push the Updated `README.md` to GitHub
Save `README.md` (`Ctrl + S`), then run:

```powershell
git add README.md
git commit -m "Add project setup and API documentation to README"
git push