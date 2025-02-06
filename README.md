# URL Shortener

## 🚀 Overview
This is a **URL Shortener** built using **Next.js, React.js, Tailwind CSS, and MongoDB**. It allows users to shorten long URLs into custom or randomly generated short links. The application ensures efficient storage, error handling, and retrieval of shortened URLs.

## 🛠 Features
- 🔗 **Custom & Random URL Shortening** – Users can generate short links with custom aliases or randomly assigned ones.
- 📊 **Click Tracking** – Tracks the number of times a shortened URL has been accessed.
- ✅ **Error Handling** – Validates URLs to prevent incorrect or broken links.
- 📱 **Responsive UI** – Built with Tailwind CSS for a clean and adaptive user experience.
- 🗄 **Persistent Storage** – Uses MongoDB to store and retrieve shortened URLs.

## 🏗 Tech Stack
- **Frontend**: Next.js, React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **API Testing**: Postman

## 📦 Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone <repository-url>
cd url-shortener
```

### 2️⃣ Install dependencies
```bash
npm install  # or yarn install
```

### 3️⃣ Set up environment variables
Create a `.env` file in the root directory and add:
```env
MONGO_URI=<your-mongodb-connection-string>
BASE_URL=<your-base-url>
PORT=5000
```

### 4️⃣ Run the application
```bash
npm run dev  # or yarn dev
```

The app will be available at `http://localhost:3000`

## 🎯 Usage
1. **Enter a long URL** in the input field.
2. **Choose a custom alias** (optional) or let the system generate one.
3. **Click the 'Shorten' button** to get a shortened URL.
4. **Copy and share** the shortened link.
5. **Track the number of visits** to your shortened URL.

## 📂 Project Structure
```
├── components/        # Reusable UI components
├── pages/             # Next.js pages (API routes & frontend views)
├── api/generate       # Backend logic
├── [shorturl]         # Database connections
├── page.js            # Tailwind CSS and React.js styles
├── .env               # Environment variables
├── package.json       # Dependencies & scripts
├── README.md          # Project documentation
```

## 📌 Future Improvements
- 🔒 **Authentication** – Allow users to manage their shortened links.
- 📊 **Analytics Dashboard** – Display click statistics in a visual format.
- 🛡 **Spam Prevention** – Implement rate limiting and CAPTCHA.

---
Made with ❤️ by Prety Saha
You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
