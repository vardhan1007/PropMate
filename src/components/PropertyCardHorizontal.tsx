"use client";

import React from "react";
import { MapPin, BedDouble, Bath, Square, ArrowUpRight } from "lucide-react";

export default function PropertyCardHorizontal({ data }: { data: any }) {
  return (
    <div className="group relative w-full px-4">
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[70%] h-6 bg-slate-900/10 blur-[30px] rounded-full transition-all duration-700 group-hover:bg-blue-600/20" />
      <div className="relative bg-white/95 backdrop-blur-xl rounded-[32px] overflow-hidden border border-white/80 shadow-lg transition-all duration-500 flex flex-col md:flex-row w-full md:h-[360px]">
        <div className="relative w-full md:w-[40%] h-48 md:h-full overflow-hidden">
          <img src={data.image} alt={data.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
          <div className="absolute top-5 left-5">
            <span className="bg-blue-600/90 text-white px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest">{data.status}</span>
          </div>
        </div>
        <div className="w-full md:w-[60%] p-8 flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center gap-1.5 text-blue-600 mb-2">
              <MapPin size={14} />
              <span className="text-[9px] font-black uppercase tracking-widest">{data.location}</span>
            </div>
            <h3 className="text-2xl font-serif font-black text-slate-900 leading-tight mb-4 line-clamp-2">{data.title}</h3>
            <div className="grid grid-cols-3 gap-3 py-5 border-y border-slate-50">
              <Stat icon={<BedDouble />} value={data.beds} label="Beds" />
              <Stat icon={<Bath />} value={data.baths} label="Baths" />
              <Stat icon={<Square />} value={data.sqft} label="Sq Ft" />
            </div>
          </div>
          <div className="pt-4 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Investment</span>
              <span className="text-2xl font-black text-slate-900">{data.price}</span>
            </div>
            <button className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all shadow-md active:scale-90"><ArrowUpRight size={20} /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ icon, value, label }: { icon: any, value: any, label: string }) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-1 text-slate-900">
        <span className="text-blue-600">{React.cloneElement(icon, { size: 16 })}</span>
        <span className="text-sm font-bold">{value}</span>
      </div>
      <span className="text-[8px] uppercase font-bold text-slate-400">{label}</span>
    </div>
  );
}