import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="bg-white py-7 md:p-6 rounded-md">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl font-semibold text-black">
            Add Cell Leader
          </CardTitle>
          <CardDescription className="text-neutral-600 mb-2 font-medium">
            Grow Your Cell, One Soul at a Time
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Full name" />
          <Input placeholder="Phone Number" type="tel" />
          <Input placeholder="Email (optional)" />
          <div>
            <Select>
              <SelectTrigger className="w-full cursor-pointer">
                <SelectValue placeholder="Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pastor">Pastor</SelectItem>
                <SelectItem value="minister">Minister</SelectItem>
                <SelectItem value="elder">Elder</SelectItem>
                <SelectItem value="deacon">Deacon</SelectItem>
                <SelectItem value="deaconess">Deaconess</SelectItem>
                <SelectItem value="steward">Steward</SelectItem>
                <SelectItem value="leader">Leader</SelectItem>
                <SelectItem value="work force">Work Force</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Input placeholder="Address/Location" />
          <div>
            <Select>
              <SelectTrigger className="w-full cursor-pointer">
                <SelectValue placeholder="Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-3 flex-wrap pt-4">
            <Button className="flex-1 bg-[#0fa2f7] cursor-pointer hover:bg-[#03a1fc] text-white">
              <Send className="w-4 h-4 mr-2" />
              <span>Submit</span>
            </Button>
          </div>
        </CardContent>
      </div>
    </div>
  );
};

export default page;
