export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] bg-brand-black flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <div className="w-12 h-12 border-2 border-white/10 border-t-brand-accent rounded-full animate-spin" />
        <span className="text-xs font-bold uppercase tracking-widest text-white/30">
          Laden...
        </span>
      </div>
    </div>
  );
}
