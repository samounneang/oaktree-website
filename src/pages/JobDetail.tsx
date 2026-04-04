import { useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import jobs from '../data/jobs';

interface LocationState {
    job: typeof jobs[number];
}

const JobDetail: React.FC = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<'detail' | 'apply'>('detail');

    const state = location.state as LocationState | undefined;
    const job = state?.job;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Extract form data
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const brokenExperience = formData.get("brokenExperience") as string;
    const proudMoment = formData.get("proudMoment") as string;
    const principles = formData.get("principles") as string;
    const file = formData.get("cv") as File;

    // Prepare FormData for API
    const submission = new FormData();
    submission.append("SendFrom", email);
    submission.append("SendTo", "hello@oaktreeventurestudio.com");
    submission.append("Title", `Job Application: ${firstName} ${lastName}`);
    submission.append("Content", `
Name: ${firstName} ${lastName} <br/>
Phone: ${phone} <br/>
Email: ${email} <br/><br/><br/>
What is something "broken" you've personally experienced or observed that you want to see "solved"? Why?: <br/><i>${brokenExperience}</i> <br/>
Share with us a moment, achievement, or something you worked on that you're most proud of. Tell us why.: <br/><i>${proudMoment}</i> <br/>
Tell us about an incident when you stood by your principles/values/decisions under pressure or potentially facing repercussions.: <br/><i>${principles}</i>
    `.trim());
    submission.append("FileCV", file);

    try {
        const res = await fetch("https://dap.oaktreeventurestudio.com/api/Plans/send-cv-from-website", {
            method: "POST",
            body: submission,
            headers: {
                "Accept": "*/*"
                // DO NOT set "Content-Type" here!
            },
        });

        // const data = await res.json();
        // console.log(data);

        if (!res.ok) throw new Error("Failed to submit application.");
        
        alert("✅ Application submitted successfully!");
        form.reset();
    } catch (error) {
        console.error(error);
        alert("❌ Failed to submit application. Please try again.");
    } finally {
        setLoading(false);
    }
};

    useEffect(() => {
        if (!job) {
            navigate('/');
        }
    }, [job, navigate]);

    if (!job) return null;

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left mb-16">
            {/* Back Button */}
            <div className="flex justify-between items-center mb-6">
                <button
                    onClick={() => navigate(-1)}
                    className="text-gray-700 p-2 font-bold hover:underline"
                    aria-label="Go Back"
                >
                    ← Go Back
                </button>
            </div>

            {/* Job Title */}
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-green-600">{job.title}</h1>

            {/* Tabs */}
            <div className="flex gap-4 mb-8 border-b border-gray-200">
                <button
                    onClick={() => setActiveTab('detail')}
                    className={`px-4 py-2 border-b-2 transition font-medium ${activeTab === 'detail'
                        ? 'border-green-600 text-green-600'
                        : 'border-transparent text-gray-600 hover:text-green-600'
                        }`}
                >
                    Job Detail
                </button>
                <button
                    onClick={() => setActiveTab('apply')}
                    className={`px-4 py-2 border-b-2 transition font-medium ${activeTab === 'apply'
                        ? 'border-green-600 text-green-600'
                        : 'border-transparent text-gray-600 hover:text-green-600'
                        }`}
                >
                    Apply
                </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'detail' && (
                <div className="prose prose-lg text-gray-700">
                    <div dangerouslySetInnerHTML={{ __html: job.description }}></div>

                    <div className="mt-8 text-center">
                        <button
                            onClick={() => setActiveTab('apply')}
                            className="inline-block bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
                        >
                            Apply for this Job
                        </button>
                    </div>
                </div>


            )}

            {activeTab === 'apply' && (
                <form onSubmit={handleSubmit}
                    className="space-y-4 text-left"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">First Name</label>
                            <input type="text" name="firstName" required className="mt-1 w-full border rounded-md p-2" aria-required="true" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Last Name</label>
                            <input type="text" name="lastName" required className="mt-1 w-full border rounded-md p-2" aria-required="true" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" name="email" required className="mt-1 w-full border rounded-md p-2" aria-required="true" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Phone</label>
                        <input type="tel" name="phone" required className="mt-1 w-full border rounded-md p-2" aria-required="true" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Upload CV</label>
                        <input type="file" name="cv" accept=".pdf,.doc,.docx" className="mt-1 w-full" required />
                    </div>
                    <br /><br />
                    <div className="mt-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">What is something "broken" you've personally experienced or observed that you want to see "solved"? Why?</label>
                            <textarea name="brokenExperience" className="mt-1 w-full border rounded-md p-2" />

                            <label className="block text-sm font-medium text-gray-700">Share with us a moment, achievement, or something you worked on that you're most proud of. Tell us why.</label>
                            <textarea name="proudMoment" className="mt-1 w-full border rounded-md p-2" />

                            <label className="block text-sm font-medium text-gray-700">Tell us about an incident when you stood by your principles/values/decisions under pressure or potentially facing repercussions.</label>
                            <textarea name="principles" className="mt-1 w-full border rounded-md p-2" />
                        </div>
                    </div>

                    <div className="pt-4">
                        <button
                             disabled={loading}
                            type="submit"
                            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-200"
                        >
                            {loading ? "Submitting..." : "Submit Application"}
                        </button>

                      
                    </div>
                </form>
            )}
        </section>
    );
};

export default JobDetail;
