const Portfolio = () => {
  // const [expandedProject, setExpandedProject] = useState<number | null>(null);

  // const projects = [
  //   {
  //     id: 1,
  //     name: 'TechFlow Solutions',
  //     industry: 'SaaS Platform',
  //     country: 'United States',
  //     stage: 'Series B',
  //     involvement: 'Co-founder & Lead Investor',
  //     description:
  //       'AI-powered workflow automation platform that helps enterprise teams streamline their operations and increase productivity by up to 40%.',
  //     fullDescription:
  //       'TechFlow Solutions revolutionizes how enterprise teams manage their workflows through advanced AI automation. The platform integrates with existing tools and learns from user behavior to suggest optimizations and automate repetitive tasks. Since launch, TechFlow has processed over 10 million workflows and saved companies an estimated 2 million hours of manual work.',
  //     metrics: {
  //       users: '50,000+',
  //       revenue: '$10M ARR',
  //       growth: '300% YoY',
  //       employees: '85',
  //     },
  //     image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
  //   },
  //   // ... other projects (same as your data)
  // ];

  // const toggleExpanded = (projectId: number) => {
  //   setExpandedProject(expandedProject === projectId ? null : projectId);
  // };

  // const getStageColor = (stage: string) => {
  //   switch (stage) {
  //     case 'Seed':
  //       return 'bg-blue-100 text-blue-800';
  //     case 'Series A':
  //       return 'bg-green-100 text-green-800';
  //     case 'Series B':
  //       return 'bg-purple-100 text-purple-800';
  //     case 'Series C':
  //       return 'bg-orange-100 text-orange-800';
  //     default:
  //       return 'bg-gray-100 text-gray-800';
  //   }
  // };

  return (
    <div className="min-h-screen pt-20 ">
      {/* Hero Banner */}
      <section className="relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-green-600">‘Featured Oaks’</span>
          </h1>
          <h1 className="text-4xl md:text-4xl font-bold mb-6">
            <span className="text-gray-900">From seeds to forests</span>
          </h1>
        </div>
      </section>

      {/* Portfolio Projects */}
      <section className="py-20 pt-40 relative z-10">
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Portfolio</h2>
          </div>

          <div className="space-y-8">
            {projects.map((project) => (
              <div key={project.id} className="rounded-2xl border overflow-hidden hover:bg-green-50 transition-colors">
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-full">
                      <div className="flex flex-wrap items-start justify-between mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.name}</h3>
                        <button
                          onClick={() => toggleExpanded(project.id)}
                          className="flex items-center text-emerald-800 hover:text-emerald-600 transition-colors"
                          aria-expanded={expandedProject === project.id}
                          aria-controls={`project-desc-${project.id}`}
                        >
                          {expandedProject === project.id ? (
                            <>
                              <span className="mr-2">Show Less</span>
                              <ChevronUp size={20} />
                            </>
                          ) : (
                            <>
                              <span className="mr-2">Read More</span>
                              <ChevronDown size={20} />
                            </>
                          )}
                        </button>
                      </div>

                      {expandedProject === project.id && (
                        <>
                          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6 text-gray-600 text-sm">
                            <div className="flex items-center">
                              <Building size={16} className="mr-3 text-emerald-800" />
                              <span className="font-medium block">Industry:</span>
                              <span className="ml-1">{project.industry}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin size={16} className="mr-2 text-emerald-800" />
                              <span className="font-medium">Country:</span>
                              <span className="ml-1">{project.country}</span>
                            </div>
                            <div className="flex items-center">
                              <TrendingUp size={16} className="mr-2 text-emerald-800" />
                              <span className="font-medium">Stage:</span>
                              <span className={`ml-1 px-2 py-1 rounded-full text-xs font-medium ${getStageColor(project.stage)}`}>
                                {project.stage}
                              </span>
                            </div>
                            <div className="flex items-center">
                              <Users size={16} className="mr-2 text-emerald-800" />
                              <span className="font-medium">Role:</span>
                              <span className="ml-1 text-xs">{project.involvement}</span>
                            </div>
                          </div>

                          <p
                            id={`project-desc-${project.id}`}
                            className="text-gray-700 leading-relaxed mb-6"
                          >
                            {project.fullDescription}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
        <p className="text-center text-gray-500">working in progress</p>
      </section>
    </div>
  );
};

export default Portfolio;
