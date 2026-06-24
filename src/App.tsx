import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatCards from './components/StatCards';
import SalesChart from './components/SalesChart';
import QuickActions from './components/QuickActions';
import TeamLeaderboard from './components/TeamLeaderboard';
import FlagshipProjects from './components/FlagshipProjects';
import Icon from './components/Icon';

export default function App() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="pl-72 min-h-screen flex flex-col">
        {/* Header */}
        <Header />

        {/* Dashboard Canvas */}
        <div className="p-8 space-y-8 max-w-7xl mx-auto w-full">
          {/* Hero Header Section */}
          <section className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <h2 className="font-headline text-4xl font-bold text-on-surface tracking-tight mb-2">
                Portfolio Overview
              </h2>
              <p className="text-on-surface-variant max-w-lg font-body leading-relaxed">
                An editorial summary of your current real estate holdings and sales performance. Track
                global metrics across all curators and developers.
              </p>
            </div>
            <div className="flex gap-3">
              <div className="px-4 py-2 bg-surface-container-low rounded-lg flex items-center gap-2 text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant">
                <Icon name="calendar_today" className="text-sm" />
                Oct 24, 2023 — Oct 31, 2023
              </div>
              <button className="px-4 py-2 bg-primary text-on-primary rounded-lg text-xs font-label font-bold uppercase tracking-widest hover:shadow-lg transition-all cursor-pointer">
                Download Report
              </button>
            </div>
          </section>

          {/* Stat Cards */}
          <StatCards />

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <SalesChart />
            <QuickActions />
          </div>

          {/* Leaderboard Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <TeamLeaderboard />
            <FlagshipProjects />
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-auto p-8 border-t border-outline-variant/10 text-center">
          <p className="text-[10px] font-label uppercase tracking-[0.25em] text-on-surface-variant font-semibold">
            Alexandria Editorial Curator © 2023 — Professional Administration Dashboard
          </p>
        </footer>
      </main>
    </div>
  );
}
