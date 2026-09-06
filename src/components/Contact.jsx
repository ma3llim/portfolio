import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "./Container";
import { useForm } from "react-hook-form";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import firebaseDb from "../services/firebase";

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        setError,
    } = useForm({ mode: "onTouched" });

    const onSubmit = async (data) => {
        setLoading(true);
        setSuccess(false);

        try {
            await addDoc(collection(firebaseDb, "contacts"), {
                ...data,
                createdAt: Timestamp.now(),
            });

            reset();
            setSuccess(true);
        } catch (error) {
            setError("root", {
                message: error?.message || "Something went wrong. Please try again.",
            });
        } finally {
            setLoading(false);

            setTimeout(() => {
                setSuccess(false);
            }, 5000);
        }
    };

    return (
        <section id="contact" className="w-full bg-slate-950 py-8 text-white lg:py-10">
            <Container>
                <div className="mb-10">
                    <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-indigo-400">GET IN TOUCH</p>
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Let's Work Together</h2>
                    <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-400 sm:text-base">Have a project, opportunity, or just want to connect? Send me a message and I'll get back to you.</p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 shadow-xl sm:px-4 lg:px-4"
                >
                    <AnimatePresence mode="wait">
                        {success && (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="mb-6 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-4 py-3"
                            >
                                <p className="text-sm font-medium text-emerald-400">Your message has been sent successfully.</p>
                            </motion.div>
                        )}

                        {errors.root && (
                            <motion.div
                                key="error"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="mb-6 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3"
                            >
                                <p className="text-sm font-medium text-red-500">{errors.root.message}</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 ">
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-300">Name</label>
                                <input
                                    {...register("name", {
                                        required: "Name is required",
                                    })}
                                    type="text"
                                    placeholder="Your name"
                                    disabled={loading}
                                    className="w-full rounded-lg border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
                                />
                                {errors.name && <p className="mt-2 text-xs font-medium text-red-500">{errors.name.message}</p>}
                            </div>
                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-300">Email</label>
                                <input
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^\S+@\S+$/i,
                                            message: "Invalid email format",
                                        },
                                    })}
                                    type="email"
                                    placeholder="you@example.com"
                                    disabled={loading}
                                    className="w-full rounded-lg border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
                                />
                                {errors.email && <p className="mt-2 text-xs font-medium text-red-500">{errors.email.message}</p>}
                            </div>
                        </div>
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-300">Subject</label>
                            <input
                                {...register("subject", {
                                    required: "Subject is required",
                                })}
                                type="text"
                                placeholder="What would you like to discuss?"
                                disabled={loading}
                                className="w-full rounded-lg border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
                            />
                            {errors.subject && <p className="mt-2 text-xs font-medium text-red-500">{errors.subject.message}</p>}
                        </div>
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-300">Message</label>
                            <textarea
                                {...register("message", {
                                    required: "Message cannot be empty",
                                })}
                                placeholder="Write your message..."
                                rows={6}
                                disabled={loading}
                                className="w-full resize-none rounded-lg border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
                            />
                            {errors.message && <p className="mt-2 text-xs font-medium text-red-500">{errors.message.message}</p>}
                        </div>
                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={loading}
                                className="inline-flex min-w-36 items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </button>
                        </div>
                    </form>
                </motion.div>
            </Container>
        </section>
    );
};

export default Contact;
