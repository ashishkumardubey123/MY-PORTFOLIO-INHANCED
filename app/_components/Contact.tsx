import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Phone, Mail, Globe, Share2 } from "lucide-react";
import Image from "next/image";
import { ContactInfoProps, ContactProps, IconButtonProps } from "@/types/Types";
import {
  handleCall,
  handleEmail,
  handleShare,
  handleWebsite,
} from "./DateAndWeather";
import Tooltip from "./Tooltip";

const Contact: React.FC<ContactProps> = ( { button } ) => {
  return (
    <Dialog>
      <DialogTrigger>{ button }</DialogTrigger>
      <DialogContent className="w-96 bg-[#19181cef] text-white p-6 rounded-lg shadow-lg">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <Image
            src="/avatar.png"
            width={ 80 }
            height={ 80 }
            alt="avatar"
            className="rounded-full border-2 border-gray-700 mb-4"
          />
          <h3 className="text-lg font-semibold">Ashish Dubey</h3>
          <p className="text-sm text-gray-400 mb-4">Full Stack Web Developer</p>

          <div className="flex justify-center space-x-4 mb-6">
            <Tooltip text="Call">
              <IconButton
                icon={ <Phone size={ 20 } /> }
                label="Call"
                onClick={ handleCall }
              />
            </Tooltip>
            <Tooltip text="Email">
              <IconButton
                icon={ <Mail size={ 20 } /> }
                label="Mail"
                onClick={ handleEmail }
              />
            </Tooltip>
            <Tooltip text="Website">
              <IconButton
                icon={ <Globe size={ 20 } /> }
                label="Web"
                onClick={ handleWebsite }
              />
            </Tooltip>
            <Tooltip text="Share">
              <IconButton
                icon={ <Share2 size={ 20 } /> }
                label="Share"
                onClick={ handleShare }
              />
            </Tooltip>
          </div>

          <ContactInfo
            label="Phone"
            value="+91 9302300834"
            onClick={ handleCall }
          />
          <hr className="w-full border-gray-600 my-1" />
          <ContactInfo
            label="Email"
            value="ashish9039062705@gmail.com"
            onClick={ handleEmail }
          />
          <hr className="w-full border-gray-600 my-1" />
          <ContactInfo
            label="Website"
            value="https://ashish-portfolio-inhanced.vercel.app"
            onClick={ handleWebsite }
          />
        </div>
      </DialogContent>
    </Dialog >
  );
};

const IconButton: React.FC<IconButtonProps> = ( { icon, label, onClick } ) => (
  <button className="flex flex-col items-center" onClick={ onClick }>
    <div className="bg-blue-600 p-2 rounded-full mb-1 hover:bg-blue-700 transition">
      { icon }
    </div>
    <span className="text-xs">{ label }</span>
  </button>
);

const ContactInfo: React.FC<ContactInfoProps> = ( { label, value, onClick } ) => (
  <div
    className="w-full items-center flex justify-center gap-2 text-sm mb-2 cursor-pointer hover:text-blue-400 transition"
    onClick={ onClick }
  >
    <span className="text-gray-400">{ label }:</span>
    <p className="font-medium">{ value }</p>
  </div>
);

export default Contact;
