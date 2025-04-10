import { Switch } from "../component/ui/switch";
import { Label } from "../component/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "../component/ui/card";
import { Button } from "../component/ui/button";
import { Input } from "../component/ui/input";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="email-notifications">Email Notifications</Label>
            <Switch id="email-notifications" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="sms-notifications">SMS Notifications</Label>
            <Switch id="sms-notifications" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="push-notifications">Push Notifications</Label>
            <Switch id="push-notifications" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="order-updates">Order Updates</Label>
            <Switch id="order-updates" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="newsletter">Newsletter</Label>
            <Switch id="newsletter" defaultChecked />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Privacy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="data-sharing">Data Sharing</Label>
            <Switch id="data-sharing" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="personalized-ads">Personalized Ads</Label>
            <Switch id="personalized-ads" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="analytics">Analytics Participation</Label>
            <Switch id="analytics" defaultChecked />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Security</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current-password">Current Password</Label>
            <Input id="current-password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-password">New Password</Label>
            <Input id="new-password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm New Password</Label>
            <Input id="confirm-password" type="password" />
          </div>
          <Button>Change Password</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Account</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="account-email">Account Email</Label>
            <Input id="account-email" type="email" defaultValue="sarah.smith@example.com" />
          </div>
          <div className="space-y-2">
            <Label>Account Status</Label>
            <p className="text-sm text-gray-500">Your account is active and in good standing.</p>
          </div>
          <Button variant="destructive">Delete Account</Button>
        </CardContent>
      </Card>
    </div>
  )
}

