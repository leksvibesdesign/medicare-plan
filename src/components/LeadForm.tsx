
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Shield, Lock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const LeadForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    zipCode: '',
    turningMonth: '',
    turningYear: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.zipCode) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Form submitted successfully!",
      description: "We'll be in touch soon."
    });
    
    onSubmit(formData);
  };

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, i) => currentYear + i);

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg border">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName" className="text-lg font-medium text-gray-700">
              First Name *
            </Label>
            <Input
              id="firstName"
              type="text"
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              className="mt-2 text-lg p-4 h-12"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div>
            <Label htmlFor="lastName" className="text-lg font-medium text-gray-700">
              Last Name *
            </Label>
            <Input
              id="lastName"
              type="text"
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              className="mt-2 text-lg p-4 h-12"
              placeholder="Enter your last name"
              required
            />
          </div>
        </div>

        <div>
          <Label htmlFor="email" className="text-lg font-medium text-gray-700">
            Email Address *
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="mt-2 text-lg p-4 h-12"
            placeholder="Enter your email address"
            required
          />
        </div>

        <div>
          <Label htmlFor="phone" className="text-lg font-medium text-gray-700">
            Phone Number *
          </Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="mt-2 text-lg p-4 h-12"
            placeholder="(555) 123-4567"
            required
          />
        </div>

        <div>
          <Label htmlFor="zipCode" className="text-lg font-medium text-gray-700">
            Zip Code *
          </Label>
          <Input
            id="zipCode"
            type="text"
            value={formData.zipCode}
            onChange={(e) => handleInputChange('zipCode', e.target.value)}
            className="mt-2 text-lg p-4 h-12"
            placeholder="12345"
            maxLength={5}
            required
          />
        </div>

        <div>
          <Label className="text-lg font-medium text-gray-700 block mb-2">
            When are you turning 65?
          </Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select onValueChange={(value) => handleInputChange('turningMonth', value)}>
              <SelectTrigger className="h-12 text-lg">
                <SelectValue placeholder="Select month" />
              </SelectTrigger>
              <SelectContent>
                {months.map((month) => (
                  <SelectItem key={month} value={month}>
                    {month}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select onValueChange={(value) => handleInputChange('turningYear', value)}>
              <SelectTrigger className="h-12 text-lg">
                <SelectValue placeholder="Select year" />
              </SelectTrigger>
              <SelectContent>
                {years.map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xl py-6 h-14 font-semibold transition-all duration-200 transform hover:scale-[1.02]"
        >
          Get My Free Comparison
        </Button>

        <div className="space-y-3 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-green-600" />
            <span>Secure SSL Encrypted Form</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-blue-600" />
            <span className="font-medium text-blue-700">Licensed Agents Only</span>
          </div>
          <p className="text-xs leading-relaxed border-t pt-3">
            <strong>Disclaimer:</strong> By submitting this form, you agree to be contacted by a licensed insurance agent. This is a solicitation for insurance. Not connected with or endorsed by the United States government or the federal Medicare program.
          </p>
        </div>
      </form>
    </div>
  );
};

export default LeadForm;
