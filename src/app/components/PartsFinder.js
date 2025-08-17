"use client";
import { useState } from "react";
const MAKES = ["Audi", "BMW", "Ford", "Toyota"];
const MODELS = {
  Ford: ["F-150", "Mustang"],
  Audi: ["A4", "Q5"],
  BMW: ["M3", "X5"],
  Toyota: ["Supra", "Corolla"],
};
const YEARS = Array.from({ length: 20 }, (_, i) => String(2024 - i));

export default function PartsFinder() {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const models = make ? MODELS[make] ?? [] : [];
  return (
    <section className="section mt-4 px-4">
      <div className="rounded-2xl border border-slate-200 bg-white p-3">
        <h3 className="text-[13px] font-semibold mb-2">FIND YOUR PARTS</h3>
        <div className="grid grid-cols-3 gap-2">
          <select
            className="h-9 rounded-lg border px-2 text-[12px]"
            value={make}
            onChange={(e) => {
              setMake(e.target.value);
              setModel("");
            }}
          >
            <option value="">MAKE</option>
            {MAKES.map((m) => (
              <option key={m}>{m}</option>
            ))}
          </select>
          <select
            className="h-9 rounded-lg border px-2 text-[12px]"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            disabled={!models.length}
          >
            <option value="">{models.length ? "MODEL" : "—"}</option>
            {models.map((m) => (
              <option key={m}>{m}</option>
            ))}
          </select>
          <select
            className="h-9 rounded-lg border px-2 text-[12px]"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="">YEAR</option>
            {YEARS.map((y) => (
              <option key={y}>{y}</option>
            ))}
          </select>
        </div>
        <button
          className="mt-3 h-10 w-full rounded-lg bg-[#FF4D40] text-white text-[14px] font-semibold"
          onClick={() => alert(`Search: ${make} ${model} ${year}`)}
        >
          Find Your Parts
        </button>
      </div>
    </section>
  );
}
