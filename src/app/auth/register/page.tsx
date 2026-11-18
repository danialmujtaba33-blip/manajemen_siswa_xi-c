'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Eye, EyeOff, User, Mail, Lock, ArrowLeft, ShieldCheck } from "lucide-react"

export default function HomePage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [acceprtTerms, setAcceptTerms] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const router = useRouter();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!acceprtTerms) {
            alert("Anda harus menyetujui syarat dan ketentuan.");
            return;
        }

        if (!formData.password || formData.password !== formData.confirmPassword) {
            alert("Password dan konfirmasi password tidak cocok.");
            return;
        }

        console.log("Data Formulir:", formData);
        router.push("/auth/login");
    };

    const getPasswordStrength = (password: string) => {
        if (password.length < 6) return { text: "Lemah", color: "text-red-500" };
        if (password.length < 10) return { text: "Sedang", color: "text-yellow-500" };
        return { text: "Kuat", color: "text-green-500" };
    };

    const passwordStrength = getPasswordStrength(formData.password);
    const isfromValid = acceprtTerms && formData.password && (formData.password === formData.confirmPassword);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-blue-100 p-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/10 rounded-3xl pointer-events-none"></div>

                    <div className="relative z-10">
                        <a href="/auth/login" className="flex items-center gap-2 text-gray-600 hover:text-blue-800 mb-6">
                            <ArrowLeft className="w-4 h-4" />
                            Kembali ke Login
                        </a>

                        <div className="text-center mb-6">
                            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                                <User className="w-8 h-8 text-white" />
                            </div>
                            <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h1>
                            <p className="text-gray-600">Join us today! It takes only a few steps.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Your Full Name"
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Your Email"
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        placeholder="Your Password"
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                {formData.password && (
    <p className={`text-sm mt-1 ${passwordStrength.color}`}>
        Kekuatan: {passwordStrength.text}
    </p>
)}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                                <div className="relative">
                                    <ShieldCheck className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        placeholder="Confirm Your Password"
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                {formData.confirmPassword && (
                            <p className={`text-sm mt-1 ${formData.password === formData.confirmPassword ? "text-green-500" : "text-red-500"}`}>
                                {formData.password === formData.confirmPassword ? "Match" : "Password tidak cocok"}
                            </p>
                        )}
                            </div>
                                                        {/* Checkbox Terms */}
                            <div className="flex items-start gap-2">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    checked={acceprtTerms}
                                    onChange={(e) => setAcceptTerms(e.target.checked)}
                                    className="mt-1 w-4 h-4 accent-blue-600 cursor-pointer"
                                />
                                <label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer">
                                    Saya menyetujui <span className="text-blue-600 font-medium">syarat dan ketentuan</span> yang berlaku
                                </label>
                            </div>
                            
                            {/* Tombol Register */}
                            <button
                                type="submit"
                                disabled={!isfromValid}
                                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold shadow-lg hover:from-blue-600 hover:to-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Register
                            </button>

                            {/* Sudah punya akun */}
                            <p className="text-center text-sm text-gray-600">
                                Already have an account?{" "}
                                <a href="/auth/login" className="text-blue-600 font-medium hover:underline">
                                    Login
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}