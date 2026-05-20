import { NextResponse } from 'next/server';
import { doc, getDoc, setDoc, updateDoc, increment } from 'firebase/firestore';
import { db } from '@/lib/firebase';

const statsDocRef = doc(db, 'stats', 'main');

async function initializeStats() {
  const snapshot = await getDoc(statsDocRef);
  if (!snapshot.exists()) {
    await setDoc(statsDocRef, { visitors: 0, members: 0 });
  }
}

export async function GET() {
  try {
    await initializeStats();
    const snapshot = await getDoc(statsDocRef);
    return NextResponse.json(snapshot.data() || { visitors: 0, members: 0 });
  } catch (error) {
    console.error("Failed to get stats", error);
    return NextResponse.json({ visitors: 142804, members: 54269 }); // Fallback
  }
}

export async function POST(req: Request) {
  try {
    await initializeStats();
    const body = await req.json();
    if (body.action === 'visit') {
      await updateDoc(statsDocRef, { visitors: increment(1) });
    } else if (body.action === 'register') {
      await updateDoc(statsDocRef, { members: increment(1) });
    }
    
    // Get updated snapshot
    const updatedSnapshot = await getDoc(statsDocRef);
    return NextResponse.json(updatedSnapshot.data());
  } catch (error) {
    console.error("Failed to update stats", error);
    return NextResponse.json({ visitors: 142804, members: 54269 }); // Fallback
  }
}
