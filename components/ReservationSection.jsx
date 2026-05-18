'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function ReservationSection() {
  const [formData, setFormData] = useState({
  name: '',
  phone_number: '',
  reservation_date: '',
  reservation_time: '',
  guests: '',
  special_occasion: '',
});

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from('reservations')
      .insert([formData]);

    if (!error) {
  setSuccess(true);

  setFormData({
  name: '',
  phone_number: '',
  reservation_date: '',
  reservation_time: '',
  guests: '',
  special_occasion: '',
});

} else {
  alert(error.message);
  console.error(error);
}
  };

  return (
  <section
    id="reservation"
    className="relative z-50 py-20 px-6 bg-[#0F1512]"
  >
    <div className="max-w-lg mx-auto bg-[#151D19] border border-[#26352D] rounded-[28px] p-8 md:p-10 shadow-[0_0_40px_rgba(0,0,0,0.25)]">

      {/* HEADING */}
      <div className="text-center mb-8">

        <p className="text-xs tracking-[0.35em] text-[#6E8B7E] uppercase mb-3">
          Reserve
        </p>

        <h2 className="text-3xl md:text-4xl font-serif text-white">
          Table Reservation
        </h2>

        <p className="text-sm text-gray-400 mt-3 leading-relaxed">
          Reserve your table and experience elevated dining
          in a warm and intimate atmosphere.
        </p>

      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* NAME */}
<input
  type="text"
  name="name"
  placeholder="Full Name"
  required
  value={formData.name}
  onChange={handleChange}
  className="w-full bg-[#0F1512] border border-[#26352D] text-white placeholder:text-gray-500 px-5 py-4 rounded-2xl outline-none focus:border-[#6E8B7E] transition"
/>

{/* PHONE */}
<input
  type="text"
  name="phone_number"
  placeholder="Phone Number"
  required
  value={formData.phone_number}
  onChange={handleChange}
  className="w-full bg-[#0F1512] border border-[#26352D] text-white placeholder:text-gray-500 px-5 py-4 rounded-2xl outline-none focus:border-[#6E8B7E] transition"
/>

{/* DATE & TIME */}
<div className="grid md:grid-cols-2 gap-4">

  <input
    type="date"
    name="reservation_date"
    required
    value={formData.reservation_date}
    onChange={handleChange}
    className="w-full bg-[#0F1512] border border-[#26352D] text-white px-5 py-4 rounded-2xl outline-none focus:border-[#6E8B7E] transition"
  />

  <input
    type="time"
    name="reservation_time"
    required
    value={formData.reservation_time}
    onChange={handleChange}
    className="w-full bg-[#0F1512] border border-[#26352D] text-white px-5 py-4 rounded-2xl outline-none focus:border-[#6E8B7E] transition"
  />

</div>

{/* GUEST */}
<input
  type="number"
  name="guests"
  placeholder="Number of Guests"
  required
  value={formData.guests}
  onChange={handleChange}
  className="w-full bg-[#0F1512] border border-[#26352D] text-white placeholder:text-gray-500 px-5 py-4 rounded-2xl outline-none focus:border-[#6E8B7E] transition"
/>

{/* OCCASION */}
<textarea
  name="special_occasion"
  placeholder="Special Occasion (Optional)"
  value={formData.special_occasion}
  onChange={handleChange}
  className="w-full bg-[#0F1512] border border-[#26352D] text-white placeholder:text-gray-500 px-5 py-4 rounded-2xl h-28 outline-none resize-none focus:border-[#6E8B7E] transition"
/>

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full bg-[#1D3B34] hover:bg-[#284D44] text-white py-4 rounded-2xl transition tracking-[0.15em] uppercase text-sm"
        >
          Reserve Now
        </button>

        {/* SUCCESS */}
        {success && (
          <p className="text-center text-[#6E8B7E] pt-2 text-sm">
            Reservation submitted successfully ✨
          </p>
        )}

      </form>

    </div>
  </section>
);
}