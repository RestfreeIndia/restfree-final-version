"use client";

import { Users, MapPin, Star, TrendingUp, AlertTriangle, CheckCircle, Building, BarChart3, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const router = useRouter();

  const stats = {
    totalUsers: 10547,
    totalMerchants: 342,
    pendingApprovals: 12,
    reportsToReview: 8,
    monthlyVisits: 25680,
    averageRating: 4.2
  };

  const pendingMerchants = [
    { id: 1, name: "Green Cafe Downtown", type: "Restaurant", submitted: "2 hours ago" },
    { id: 2, name: "City Rest Hotel", type: "Hotel", submitted: "1 day ago" },
    { id: 3, name: "Night Pulse Club", type: "Nightlife", submitted: "3 days ago" }
  ];

  const recentReports = [
    { id: 1, location: "Urban Spice Kitchen", issue: "Cleanliness", severity: "medium", time: "30 min ago" },
    { id: 2, location: "Coastal Seafood", issue: "Access", severity: "high", time: "2 hours ago" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-blue-100 to-white pb-10">
      {/* Glassy Gradient Header with Welcome */}
      <div className="backdrop-blur-xl bg-gradient-to-r from-emerald-600/90 to-blue-600/90 shadow-2xl mb-10 px-0 md:px-8 pt-6 md:pt-10 pb-8 md:pb-14 relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 relative z-10">
          <div className="flex items-center gap-4 md:gap-8">
            <div className="bg-white/40 backdrop-blur-lg p-3 md:p-6 shadow-2xl flex items-center justify-center border-4 border-white/30 rounded-full">
              <Settings className="w-10 h-10 md:w-16 md:h-16 text-emerald-600" />
            </div>
            <div>
              <h1 className="text-xl md:text-4xl font-extrabold text-white drop-shadow mb-1 md:mb-2 leading-tight">Welcome, <span className="text-yellow-200">Admin</span>!</h1>
              <div className="flex items-center text-white/90 space-x-2 md:space-x-5 text-xs md:text-lg font-semibold flex-wrap">
                <div className="flex items-center"><Star className="w-4 h-4 md:w-6 md:h-6 text-yellow-300 mr-1" /><span>{stats.averageRating}</span></div>
                <span>•</span>
                <span>Platform Admin</span>
                <span>•</span>
                <span className="text-green-200 text-xs md:text-base">Online</span>
              </div>
              <div className="mt-2 md:mt-3 text-white/80 text-xs md:text-base hidden md:block">Manage Restfree platform operations, review merchants, and handle reports.</div>
            </div>
          </div>
          <div className="space-x-2 md:space-x-4 flex">
            <Button variant="outline" className="space-x-2 border-white text-white bg-white/20 hover:bg-white/30 shadow-lg px-2 md:px-4 py-1 md:py-2 text-xs md:text-base">
              <Settings className="w-4 h-4 md:w-5 md:h-5" />
              <span>Settings</span>
            </Button>
            <Button
              variant="destructive"
              className="bg-red-600 hover:bg-red-700 text-white font-bold shadow-lg px-2 md:px-4 py-1 md:py-2 text-xs md:text-base"
              onClick={() => {
                localStorage.removeItem('userType');
                router.push('/');
              }}
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-1 md:px-0">
        {/* Navigation Tabs */}
        <div className="relative z-20">
          <div className="backdrop-blur-xl bg-white/80 rounded-2xl p-2 md:p-4 flex mb-8 md:mb-14 overflow-x-auto shadow-lg border border-white/40 max-w-full scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-transparent gap-2 md:gap-6 sticky top-0 z-30">
            {[
              { key: 'overview', label: 'Overview', icon: <TrendingUp className='w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2' /> },
              { key: 'merchants', label: 'Merchants', icon: <Building className='w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2' /> },
              { key: 'reports', label: 'Reports', icon: <AlertTriangle className='w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2' /> },
              { key: 'analytics', label: 'Analytics', icon: <BarChart3 className='w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2' /> },
            ].map((tab) => (
              <button
                key={tab.key}
                className={`flex items-center px-3 md:px-10 py-2 md:py-4 rounded-xl capitalize whitespace-nowrap font-semibold transition-all duration-200 mr-1 md:mr-2 last:mr-0 text-xs md:text-xl shadow-md transition-transform hover:scale-105 hover:shadow-xl ${
                  activeTab === tab.key
                    ? 'bg-gradient-to-r from-emerald-600 to-blue-600 text-white shadow-xl scale-105 md:scale-110'
                    : 'text-gray-600 hover:text-emerald-700 bg-white/70 hover:bg-emerald-50'
                }`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.icon}{tab.label}
              </button>
            ))}
          </div>
        </div>
        {/* Main Content Based on Tab */}
        {activeTab === 'overview' && (
          <>
            {/* Stat Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
              <Card className="backdrop-blur-xl bg-gradient-to-br from-blue-400/30 to-white/60 shadow-2xl border border-blue-200/40 h-full min-h-[220px] flex flex-col justify-between p-6 rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <CardHeader className="pb-2 flex flex-row items-center gap-4">
                  <Users className="w-10 h-10 text-blue-600 bg-white/60 rounded-full p-2 shadow-lg" />
                  <CardTitle className="text-xl font-bold text-blue-900">Total Users</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-5xl font-extrabold text-blue-800 drop-shadow mb-2">{stats.totalUsers.toLocaleString()}</div>
                  <p className="text-base text-green-700">↑ 12% from last month</p>
                </CardContent>
              </Card>
              <Card className="backdrop-blur-xl bg-gradient-to-br from-emerald-400/30 to-white/60 shadow-2xl border border-emerald-200/40 h-full min-h-[220px] flex flex-col justify-between p-6 rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <CardHeader className="pb-2 flex flex-row items-center gap-4">
                  <Building className="w-10 h-10 text-emerald-600 bg-white/60 rounded-full p-2 shadow-lg" />
                  <CardTitle className="text-xl font-bold text-emerald-900">Partner Locations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-5xl font-extrabold text-emerald-800 drop-shadow mb-2">{stats.totalMerchants}</div>
                  <p className="text-base text-green-700">+8 new this week</p>
                </CardContent>
              </Card>
              <Card className="backdrop-blur-xl bg-gradient-to-br from-yellow-300/30 to-white/60 shadow-2xl border border-yellow-200/40 h-full min-h-[220px] flex flex-col justify-between p-6 rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <CardHeader className="pb-2 flex flex-row items-center gap-4">
                  <TrendingUp className="w-10 h-10 text-yellow-500 bg-white/60 rounded-full p-2 shadow-lg" />
                  <CardTitle className="text-xl font-bold text-yellow-900">Monthly Visits</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-5xl font-extrabold text-yellow-700 drop-shadow mb-2">{stats.monthlyVisits.toLocaleString()}</div>
                  <p className="text-base text-green-700">↑ 23% from last month</p>
                </CardContent>
              </Card>
              <Card className="backdrop-blur-xl bg-gradient-to-br from-purple-400/30 to-white/60 shadow-2xl border border-purple-200/40 h-full min-h-[220px] flex flex-col justify-between p-6 rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <CardHeader className="pb-2 flex flex-row items-center gap-4">
                  <Star className="w-10 h-10 text-purple-600 bg-white/60 rounded-full p-2 shadow-lg" />
                  <CardTitle className="text-xl font-bold text-purple-900">Avg. Rating</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-2">
                    <div className="text-5xl font-extrabold text-purple-700 drop-shadow">{stats.averageRating}</div>
                    <Star className="w-7 h-7 text-yellow-400 ml-3" />
                  </div>
                  <p className="text-base text-green-700">Platform-wide</p>
                </CardContent>
              </Card>
            </div>
            {/* Quick Actions Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
              <div className="backdrop-blur-xl bg-gradient-to-br from-blue-400/30 to-blue-200/60 shadow-2xl p-10 flex flex-col items-center transition-all border border-blue-200/40 h-full min-h-[220px] justify-between rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <AlertTriangle className="h-14 w-14 mb-6 text-blue-600 bg-white/60 rounded-full p-3 shadow-lg" />
                <span className="font-bold text-2xl mb-3 text-blue-900">Review Merchants</span>
                <Button className="bg-blue-600 hover:bg-blue-700 w-full mt-2 text-xl font-semibold py-3">Go</Button>
              </div>
              <div className="backdrop-blur-xl bg-gradient-to-br from-purple-400/30 to-purple-200/60 shadow-2xl p-10 flex flex-col items-center transition-all border border-purple-200/40 h-full min-h-[220px] justify-between rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <AlertTriangle className="h-14 w-14 mb-6 text-purple-600 bg-white/60 rounded-full p-3 shadow-lg" />
                <span className="font-bold text-2xl mb-3 text-purple-900">Review Reports</span>
                <Button className="bg-purple-600 hover:bg-purple-700 w-full mt-2 text-xl font-semibold py-3">Go</Button>
              </div>
              <div className="backdrop-blur-xl bg-gradient-to-br from-emerald-400/30 to-emerald-200/60 shadow-2xl p-10 flex flex-col items-center transition-all border border-emerald-200/40 h-full min-h-[220px] justify-between rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <BarChart3 className="h-14 w-14 mb-6 text-emerald-600 bg-white/60 rounded-full p-3 shadow-lg" />
                <span className="font-bold text-2xl mb-3 text-emerald-900">View Analytics</span>
                <Button className="bg-emerald-600 hover:bg-emerald-700 w-full mt-2 text-xl font-semibold py-3">Go</Button>
              </div>
            </div>
            {/* Pending Merchants & Reports */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
              <Card className="backdrop-blur-xl bg-white/80 shadow-xl border border-emerald-200/40">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-500" />
                    Pending Approvals ({stats.pendingApprovals})
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {pendingMerchants.map((merchant) => (
                    <div key={merchant.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">{merchant.name}</p>
                        <p className="text-sm text-gray-600">{merchant.type} • {merchant.submitted}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Review</Button>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">Approve</Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
              <Card className="backdrop-blur-xl bg-white/80 shadow-xl border border-purple-200/40">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                    Recent Reports ({stats.reportsToReview})
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {recentReports.map((report) => (
                    <div key={report.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">{report.location}</p>
                        <p className="text-sm text-gray-600">{report.issue} • {report.time}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          report.severity === 'high' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {report.severity}
                        </span>
                        <Button size="sm" variant="outline">Review</Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
            {/* Sidebar Widgets: Full width below main grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Quick Tips Widget */}
              <div className="backdrop-blur-xl bg-gradient-to-br from-white/80 to-emerald-100/60 rounded-2xl shadow-xl border border-emerald-200/40 p-8">
                <h4 className="text-xl font-bold text-emerald-800 mb-3">Quick Tips</h4>
                <ul className="list-disc list-inside text-emerald-700 space-y-2 text-lg">
                  <li>Review pending merchants promptly.</li>
                  <li>Address reports to maintain platform quality.</li>
                  <li>Monitor analytics for platform growth.</li>
                </ul>
              </div>
              {/* Mini Stats Widget */}
              <div className="backdrop-blur-xl bg-gradient-to-br from-blue-100/80 to-white/60 rounded-2xl shadow-xl border border-blue-200/40 p-8 flex flex-col items-center">
                <h4 className="text-xl font-bold text-blue-800 mb-3">At a Glance</h4>
                <div className="flex flex-col gap-3 w-full text-lg">
                  <div className="flex items-center justify-between w-full text-blue-900 font-semibold">
                    <span>Active Users</span>
                    <span>8,900</span>
                  </div>
                  <div className="flex items-center justify-between w-full text-blue-900 font-semibold">
                    <span>Active Merchants</span>
                    <span>310</span>
                  </div>
                  <div className="flex items-center justify-between w-full text-blue-900 font-semibold">
                    <span>Reports Today</span>
                    <span>2</span>
                  </div>
                </div>
              </div>
              {/* Announcements Widget */}
              <div className="backdrop-blur-xl bg-gradient-to-br from-yellow-100/80 to-white/60 rounded-2xl shadow-xl border border-yellow-200/40 p-8">
                <h4 className="text-xl font-bold text-yellow-800 mb-3">Announcements</h4>
                <p className="text-yellow-700 text-lg">Platform maintenance scheduled for Sunday 2AM-4AM UTC.</p>
              </div>
            </div>
          </>
        )}
        {activeTab !== 'overview' && (
          <div className="backdrop-blur-xl bg-white/80 rounded-2xl p-14 text-center shadow-xl border border-emerald-200/40 mt-8">
            <h3 className="text-3xl font-bold text-emerald-900 mb-4 capitalize">{activeTab} Panel</h3>
            <p className="text-gray-600 mb-8 text-lg">This section is under construction</p>
            <Button onClick={() => setActiveTab('overview')} className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-semibold py-2 px-6">Return to Overview</Button>
          </div>
        )}
      </div>
    </div>
  );
} 
