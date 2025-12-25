export default function Footer() {
    return (
        <footer className="py-10">
            <div className="flex justify-between items-center px-10 text-slate-400 text-sm">
                <span>© {new Date().getFullYear()} - Paul Nguyen</span>
                <span>GitHub</span>
            </div>
        </footer>
    )
}