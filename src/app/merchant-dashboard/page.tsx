'use client'

import { Star, MapPin, TrendingUp, Users, Clock, Settings, Upload, BarChart3, Building2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function MerchantDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  
  const merchantData = {
    businessName: "Green Garden Bistro",
    rating: 4.5,
    totalVisits: 1247,
    monthlyVisits: 89,
    restroomRating: 4.3,
    tier: "Verified",
    isOpen: true
  };

  const recentActivity = [
    { time: "2 hours ago", action: "User checked in", rating: 5 },
    { time: "4 hours ago", action: "Restroom rating received", rating: 4 },
    { time: "1 day ago", action: "User checked in", rating: 5 },
    { time: "2 days ago", action: "Photos updated", rating: null }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-blue-100 to-white pb-10">
      {/* Glassy Gradient Header with Welcome */}
      <div className="backdrop-blur-xl bg-gradient-to-r from-emerald-600/90 to-blue-600/90 shadow-2xl mb-10 px-0 md:px-8 pt-6 md:pt-10 pb-8 md:pb-14 relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 relative z-10">
          <div className="flex items-center gap-4 md:gap-8">
            <div className="bg-white/40 backdrop-blur-lg rounded-full p-3 md:p-6 shadow-2xl flex items-center justify-center border-4 border-white/30">
              <Building2 className="w-10 h-10 md:w-16 md:h-16 text-emerald-600" />
            </div>
            <div>
              <h1 className="text-xl md:text-4xl font-extrabold text-white drop-shadow mb-1 md:mb-2 leading-tight">Welcome, <span className="text-yellow-200">{merchantData.businessName}</span>!</h1>
              <div className="flex items-center text-white/90 space-x-2 md:space-x-5 text-xs md:text-lg font-semibold flex-wrap">
                <div className="flex items-center"><Star className="w-4 h-4 md:w-6 md:h-6 text-yellow-300 mr-1" /><span>{merchantData.rating}</span></div>
                <span>•</span>
                <span>{merchantData.tier}</span>
                <span>•</span>
                <div className={`flex items-center ${merchantData.isOpen ? 'text-green-200' : 'text-red-200'}`}> 
                  <span className={`mr-1 w-2 h-2 rounded-full ${merchantData.isOpen ? 'bg-green-200' : 'bg-red-200'}`}></span>
                  <span className="text-xs md:text-base">{merchantData.isOpen ? 'Open' : 'Closed'}</span>
                </div>
              </div>
              <div className="mt-2 md:mt-3 text-white/80 text-xs md:text-base hidden md:block">Manage your business, track analytics, and engage with your customers all in one place.</div>
            </div>
          </div>
          <div className="space-x-2 md:space-x-4 flex">
            <Button variant="outline" className="space-x-2 border-white text-white bg-white/20 hover:bg-white/30 shadow-lg px-2 md:px-4 py-1 md:py-2 text-xs md:text-base">
              <Settings className="w-4 h-4 md:w-5 md:h-5" />
              <span>Settings</span>
            </Button>
            <Button variant="default" className="bg-gradient-to-r from-green-200 to-blue-200 hover:from-green-300 hover:to-blue-300 text-emerald-900 font-bold space-x-2 shadow-lg px-2 md:px-4 py-1 md:py-2 text-xs md:text-base">
              <span>{merchantData.isOpen ? 'Mark as Closed' : 'Mark as Open'}</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-1 md:px-0">
        {/* Navigation Tabs */}
        <div className="relative z-20">
          <div className="backdrop-blur-xl bg-white/80 rounded-2xl p-2 md:p-4 flex mb-8 md:mb-14 overflow-x-auto shadow-lg border border-white/40 max-w-full scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-transparent gap-2 md:gap-6 sticky top-0 z-30">
            {[
              {tab: 'overview', icon: <TrendingUp className='w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2' />},
              {tab: 'analytics', icon: <BarChart3 className='w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2' />},
              {tab: 'reviews', icon: <Star className='w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2' />},
              {tab: 'photos', icon: <Upload className='w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2' />},
              {tab: 'settings', icon: <Settings className='w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2' />},
            ].map(({tab, icon}) => (
              <button
                key={tab}
                className={`flex items-center px-3 md:px-10 py-2 md:py-4 rounded-xl capitalize whitespace-nowrap font-semibold transition-all duration-200 mr-1 md:mr-2 last:mr-0 text-xs md:text-xl shadow-md transition-transform hover:scale-105 hover:shadow-xl ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-emerald-600 to-blue-600 text-white shadow-xl scale-105 md:scale-110'
                    : 'text-gray-600 hover:text-emerald-700 bg-white/70 hover:bg-emerald-50'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {icon}{tab}
              </button>
            ))}
          </div>
        </div>
        {activeTab === 'overview' && (
          <>
            {/* Stat Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
              <Card className="backdrop-blur-xl bg-gradient-to-br from-blue-400/30 to-white/60 shadow-2xl border border-blue-200/40 h-full min-h-[220px] flex flex-col justify-between p-6 rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <CardHeader className="pb-2 flex flex-row items-center gap-4">
                  <Users className="w-10 h-10 text-blue-600 bg-white/60 rounded-full p-2 shadow-lg" />
                  <CardTitle className="text-xl font-bold text-blue-900">Total Visitors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-5xl font-extrabold text-blue-800 drop-shadow mb-2">{merchantData.totalVisits}</div>
                  <p className="text-base text-green-700">↑ 8% from last month</p>
                </CardContent>
              </Card>
              <Card className="backdrop-blur-xl bg-gradient-to-br from-emerald-400/30 to-white/60 shadow-2xl border border-emerald-200/40 h-full min-h-[220px] flex flex-col justify-between p-6 rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <CardHeader className="pb-2 flex flex-row items-center gap-4">
                  <Clock className="w-10 h-10 text-emerald-600 bg-white/60 rounded-full p-2 shadow-lg" />
                  <CardTitle className="text-xl font-bold text-emerald-900">Monthly Visitors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-5xl font-extrabold text-emerald-800 drop-shadow mb-2">{merchantData.monthlyVisits}</div>
                  <p className="text-base text-green-700">↑ 12% from last month</p>
                </CardContent>
              </Card>
              <Card className="backdrop-blur-xl bg-gradient-to-br from-yellow-300/30 to-white/60 shadow-2xl border border-yellow-200/40 h-full min-h-[220px] flex flex-col justify-between p-6 rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <CardHeader className="pb-2 flex flex-row items-center gap-4">
                  <Star className="w-10 h-10 text-yellow-500 bg-white/60 rounded-full p-2 shadow-lg" />
                  <CardTitle className="text-xl font-bold text-yellow-900">Restaurant Rating</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-2">
                    <div className="text-5xl font-extrabold text-yellow-700 drop-shadow">{merchantData.rating}</div>
                    <Star className="w-7 h-7 text-yellow-400 ml-3" />
                  </div>
                  <p className="text-base text-green-700">↑ 0.2 from last month</p>
                </CardContent>
              </Card>
              <Card className="backdrop-blur-xl bg-gradient-to-br from-purple-400/30 to-white/60 shadow-2xl border border-purple-200/40 h-full min-h-[220px] flex flex-col justify-between p-6 rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <CardHeader className="pb-2 flex flex-row items-center gap-4">
                  <MapPin className="w-10 h-10 text-purple-600 bg-white/60 rounded-full p-2 shadow-lg" />
                  <CardTitle className="text-xl font-bold text-purple-900">Restroom Rating</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-2">
                    <div className="text-5xl font-extrabold text-purple-700 drop-shadow">{merchantData.restroomRating}</div>
                    <Star className="w-7 h-7 text-yellow-400 ml-3" />
                  </div>
                  <p className="text-base text-green-700">↑ 0.1 from last month</p>
                </CardContent>
              </Card>
            </div>
            {/* Quick Actions Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
              <div className="backdrop-blur-xl bg-gradient-to-br from-blue-400/30 to-blue-200/60 shadow-2xl p-10 flex flex-col items-center transition-all border border-blue-200/40 h-full min-h-[220px] justify-between rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <Upload className="h-14 w-14 mb-6 text-blue-600 bg-white/60 rounded-full p-3 shadow-lg" />
                <span className="font-bold text-2xl mb-3 text-blue-900">Update Photos</span>
                <Button className="bg-blue-600 hover:bg-blue-700 w-full mt-2 text-xl font-semibold py-3">Go</Button>
              </div>
              <div className="backdrop-blur-xl bg-gradient-to-br from-purple-400/30 to-purple-200/60 shadow-2xl p-10 flex flex-col items-center transition-all border border-purple-200/40 h-full min-h-[220px] justify-between rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <BarChart3 className="h-14 w-14 mb-6 text-purple-600 bg-white/60 rounded-full p-3 shadow-lg" />
                <span className="font-bold text-2xl mb-3 text-purple-900">View Full Analytics</span>
                <Button className="bg-purple-600 hover:bg-purple-700 w-full mt-2 text-xl font-semibold py-3">Go</Button>
              </div>
              <div className="backdrop-blur-xl bg-gradient-to-br from-emerald-400/30 to-emerald-200/60 shadow-2xl p-10 flex flex-col items-center transition-all border border-emerald-200/40 h-full min-h-[220px] justify-between rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <Users className="h-14 w-14 mb-6 text-emerald-600 bg-white/60 rounded-full p-3 shadow-lg" />
                <span className="font-bold text-2xl mb-3 text-emerald-900">Manage Reviews</span>
                <Button className="bg-emerald-600 hover:bg-emerald-700 w-full mt-2 text-xl font-semibold py-3">Go</Button>
              </div>
            </div>
            {/* Recent Activity Timeline */}
            <Card className="backdrop-blur-xl bg-white/80 shadow-xl border border-emerald-200/40 mb-10">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-emerald-900">Recent Activity</CardTitle>
                <CardDescription className="text-emerald-700">Latest interactions with your business</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative pl-6 border-l-4 border-emerald-200 space-y-8">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-4 h-4 rounded-full bg-emerald-400 border-2 border-white shadow-lg"></div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 text-lg">{activity.action}</div>
                        <div className="text-sm text-gray-500">{activity.time}</div>
                      </div>
                      {activity.rating && (
                        <div className="flex items-center">
                          <span className="font-bold mr-1 text-yellow-600 text-lg">{activity.rating}</span>
                          <Star className="w-5 h-5 text-yellow-500" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <Button variant="link" className="w-full mt-8 text-emerald-700 font-bold text-lg">View All Activity</Button>
              </CardContent>
            </Card>
            {/* Sidebar Widgets: Full width below main grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Quick Tips Widget */}
              <div className="backdrop-blur-xl bg-gradient-to-br from-white/80 to-emerald-100/60 rounded-2xl shadow-xl border border-emerald-200/40 p-8">
                <h4 className="text-xl font-bold text-emerald-800 mb-3">Quick Tips</h4>
                <ul className="list-disc list-inside text-emerald-700 space-y-2 text-lg">
                  <li>Keep your business info up to date for better visibility.</li>
                  <li>Respond to reviews to build trust with customers.</li>
                  <li>Use analytics to optimize your offerings.</li>
                </ul>
              </div>
              {/* Mini Stats Widget */}
              <div className="backdrop-blur-xl bg-gradient-to-br from-blue-100/80 to-white/60 rounded-2xl shadow-xl border border-blue-200/40 p-8 flex flex-col items-center">
                <h4 className="text-xl font-bold text-blue-800 mb-3">At a Glance</h4>
                <div className="flex flex-col gap-3 w-full text-lg">
                  <div className="flex items-center justify-between w-full text-blue-900 font-semibold">
                    <span>Visits Today</span>
                    <span>23</span>
                  </div>
                  <div className="flex items-center justify-between w-full text-blue-900 font-semibold">
                    <span>Bookings</span>
                    <span>5</span>
                  </div>
                  <div className="flex items-center justify-between w-full text-blue-900 font-semibold">
                    <span>Avg. Stay</span>
                    <span>1.2h</span>
                  </div>
                </div>
              </div>
              {/* Announcements Widget */}
              <div className="backdrop-blur-xl bg-gradient-to-br from-yellow-100/80 to-white/60 rounded-2xl shadow-xl border border-yellow-200/40 p-8">
                <h4 className="text-xl font-bold text-yellow-800 mb-3">Announcements</h4>
                <p className="text-yellow-700 text-lg">New analytics features launching soon! Stay tuned for updates.</p>
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

