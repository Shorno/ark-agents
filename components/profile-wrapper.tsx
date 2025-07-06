"use client";

import {useSession} from "@/lib/auth-client";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {CalendarDays, Mail, User, Shield, Clock} from "lucide-react";
import Loading from "@/app/loading";

export default function ProfileWrapper() {
    const {data, isPending} = useSession();

    if (isPending) {
        return (
            <Loading text={"Loading profile information"}/>
        );
    }

    if (!data?.user) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                        No user data available
                    </h2>
                    <p className="text-gray-600">Please log in to view your profile.</p>
                </div>
            </div>
        );
    }

    const {user} = data;

    const formatDate = (dateString: Date) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="container mx-auto px-4 py-32 max-w-4xl">
            <div className="space-y-6">
                <div className="text-center mb-8">
                    <p className="text-gray-600">Manage your account information</p>
                </div>

                <Card className="w-full">
                    <CardHeader className="text-center pb-4">
                        <div className="flex justify-center mb-4">
                            <Avatar className="w-24 h-24">
                                <AvatarImage src={user?.image || ""} alt={user.name}/>
                                <AvatarFallback className="text-2xl">
                                    {user.name ? user.name[0].toUpperCase() : "U"}
                                </AvatarFallback>
                            </Avatar>
                        </div>
                        <CardTitle className="text-2xl font-bold text-gray-900">
                            {user.name}
                        </CardTitle>
                        <div className="flex justify-center mt-2">
                            <Badge variant={user.emailVerified ? "default" : "destructive"}
                                   className={`${user.emailVerified ? "bg-green-600" : ""}`}>
                                {user.emailVerified ? "Email Verified" : "Email Not Verified"}
                            </Badge>
                        </div>
                    </CardHeader>

                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                    Personal Information
                                </h3>

                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                    <User className="h-5 w-5 text-gray-500"/>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Full Name</p>
                                        <p className="text-sm text-gray-600">{user.name}</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                    <Mail className="h-5 w-5 text-gray-500"/>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Email Address</p>
                                        <p className="text-sm text-gray-600">{user.email}</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                    <Shield className="h-5 w-5 text-gray-500"/>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">User ID</p>
                                        <p className="text-gray-600 font-mono text-xs">
                                            {user.id}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                    Account Details
                                </h3>

                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                    <CalendarDays className="h-5 w-5 text-gray-500"/>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Account Created</p>
                                        <p className="text-sm text-gray-600">
                                            {formatDate(user.createdAt)}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                    <Clock className="h-5 w-5 text-gray-500"/>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Last Updated</p>
                                        <p className="text-sm text-gray-600">
                                            {formatDate(user.updatedAt)}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                    <Shield className="h-5 w-5 text-gray-500"/>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Email Status</p>
                                        <div className="flex items-center space-x-2">
                                            <p className="text-sm text-gray-600">
                                                {user.emailVerified ? "Verified" : "Not Verified"}
                                            </p>
                                            <div className={`w-2 h-2 rounded-full ${
                                                user.emailVerified ? "bg-green-500" : "bg-red-500"
                                            }`}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}