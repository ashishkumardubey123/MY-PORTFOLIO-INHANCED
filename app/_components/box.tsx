import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Card from "../_Projects/Card";
import { Projects } from "../_Projects/Project";
import { Client } from "../_Projects/Freelancing";
import PopLoader from "./PopLoader";

const ProjectDialog = ({
  button,
  platform,
}: {
  button: React.ReactNode;
  platform: string;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isOpen) {
      setIsLoading(true);
      timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{button}</DialogTrigger>
      <DialogContent>
        {isLoading ? (
          <div className="w-full h-[500px] flex justify-center items-center">
            <PopLoader platform={platform} />
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-white">
                My Projects
              </DialogTitle>
              <DialogDescription className="text-gray-500">
                Here are some of the projects that I have worked on
              </DialogDescription>
              <hr className="border-t-2 border-[#302f34] w-full mx-auto my-2" />
            </DialogHeader>
            <div className="w-full">
              <Tabs defaultValue="client" className="w-full h-full">
                <TabsList className="w-full flex items-center justify-center bg-[#27272A] gap-2 p-2">
                  <TabsTrigger className="text-white w-full" value="client">
                    Client Work
                  </TabsTrigger>
                  <TabsTrigger className="text-white w-full" value="project">
                    Project
                  </TabsTrigger>
                </TabsList>
                <div className="w-full h-[450px] xl:h-[500px] overflow-hidden overflow-y-auto  custom-scrollbar">
                  <TabsContent value="project">
                    <div className="grid grid-cols-1 md:grid-cols-2 p-2 gap-5">
                      {Projects?.map((project, index) => (
                        <Card key={index} {...project} />
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="client">
                    <div className="grid grid-cols-1 md:grid-cols-2 p-2 gap-5">
                      {Client?.map((project, index) => (
                        <Card key={index} {...project} />
                      ))}
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;
