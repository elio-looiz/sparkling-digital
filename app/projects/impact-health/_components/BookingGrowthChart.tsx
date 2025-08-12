// app/projects/impact-health/_components/BookingGrowthChart.tsx
'use client';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', bookings: 30 },
  { name: 'Feb', bookings: 45 },
  { name: 'Mar', bookings: 60 },
  { name: 'Apr', bookings: 55 },
  { name: 'May', bookings: 75 },
  { name: 'Jun', bookings: 90 },
];

export default function BookingGrowthChart() {
  return (
    <div className="w-full h-72 bg-gray-50 p-4 rounded-lg border border-gray-200">
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="name" stroke="#6b7280" />
          <YAxis stroke="#6b7280" />
          <Tooltip />
          <Line type="monotone" dataKey="bookings" stroke="#14b8a6" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}