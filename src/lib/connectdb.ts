// lib/mongoose.js
import mongoose from 'mongoose';

const dbConnect = async () => {
  if (mongoose.connections[0].readyState) {
    return mongoose.connections[0]; // Si déjà connecté, on retourne la connexion
  }

  // Sinon, on crée une nouvelle connexion
  const db = await mongoose.connect(process.env.MONGO_URI!);
  return db;
};

export default dbConnect;
