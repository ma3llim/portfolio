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
    } = useForm({
        mode: "onTouched",
    });

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
        <section id="contact" className="w-full py-14 lg:py-20">
            <Container>
                <div className="mx-auto max-w-5xl rounded-2xl border border-slate-200/80 bg-white/60 p-6 shadow-lg backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/40 sm:p-8 lg:p-10">
                    {/* Header */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-8">
                        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">Get In Touch</p>

                        <h2 className="font-playfair text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Contact Me</h2>

                        <div className="mt-3 h-1 w-14 rounded-full bg-indigo-600" />
                    </motion.div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        <AnimatePresence mode="wait">
                            {success && (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-3"
                                >
                                    <p className="text-sm font-semibold text-green-500">Your message has been sent successfully!</p>
                                </motion.div>
                            )}

                            {errors.root && (
                                <motion.div
                                    key="error"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3"
                                >
                                    <p className="text-sm font-semibold text-red-500">{errors.root.message}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Name + Email */}
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-slate-300">Name</label>

                                <input
                                    {...register("name", {
                                        required: "Name is required",
                                    })}
                                    type="text"
                                    placeholder="Your Name"
                                    disabled={loading}
                                    className="w-full rounded-lg border border-slate-300 bg-white/70 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 disabled:cursor-not-allowed disabled:opacity-60 dark:border-slate-700 dark:bg-slate-950/60 dark:text-white"
                                />

                                {errors.name && <p className="mt-2 text-xs font-medium text-red-500">{errors.name.message}</p>}
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-slate-300">Email</label>

                                <input
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^\S+@\S+$/i,
                                            message: "Invalid email format",
                                        },
                                    })}
                                    type="email"
                                    placeholder="Your Email"
                                    disabled={loading}
                                    className="w-full rounded-lg border border-slate-300 bg-white/70 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 disabled:cursor-not-allowed disabled:opacity-60 dark:border-slate-700 dark:bg-slate-950/60 dark:text-white"
                                />

                                {errors.email && <p className="mt-2 text-xs font-medium text-red-500">{errors.email.message}</p>}
                            </div>
                        </div>

                        {/* Subject */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-slate-300">Subject</label>

                            <input
                                {...register("subject", {
                                    required: "Subject is required",
                                })}
                                type="text"
                                placeholder="Subject"
                                disabled={loading}
                                className="w-full rounded-lg border border-slate-300 bg-white/70 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 disabled:cursor-not-allowed disabled:opacity-60 dark:border-slate-700 dark:bg-slate-950/60 dark:text-white"
                            />

                            {errors.subject && <p className="mt-2 text-xs font-medium text-red-500">{errors.subject.message}</p>}
                        </div>

                        {/* Message */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-slate-300">Message</label>

                            <textarea
                                {...register("message", {
                                    required: "Message cannot be empty",
                                })}
                                placeholder="Your Message"
                                rows={6}
                                disabled={loading}
                                className="w-full resize-none rounded-lg border border-slate-300 bg-white/70 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 disabled:cursor-not-allowed disabled:opacity-60 dark:border-slate-700 dark:bg-slate-950/60 dark:text-white"
                            />

                            {errors.message && <p className="mt-2 text-xs font-medium text-red-500">{errors.message.message}</p>}
                        </div>

                        {/* Submit */}
                        <div className="pt-1">
                            <button
                                type="submit"
                                disabled={loading}
                                className="inline-flex min-w-36 items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </button>
                        </div>
                    </form>
                </div>
            </Container>
        </section>
    );
};

export default Contact;
