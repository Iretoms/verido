"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { ICreateVideo, IVideo } from "../../types/index";

interface EditVideoDialogProps {
  isOpen: boolean;
  onClose: () => void;
  video: IVideo | null;
}

const EditVideo: React.FC<EditVideoDialogProps> = ({
  isOpen,
  onClose,
  video,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<ICreateVideo>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      title: video?.title || "",
      vidoeID: video?.vidoeID || "",
      category: video?.category || "",
    },
  });
  useEffect(() => {
    if (video) {
      setValue("title", video.title);
      setValue("vidoeID", video.vidoeID);
      setValue("category", video.category);
    }
  }, [video, setValue]);

  const onSubmit = async (data: ICreateVideo) => {
    if (isSubmitting) return;
    try {
    } catch (error) {
      console.error(error);
    }
    reset();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <DialogHeader>
            <DialogTitle className="text-3xl font-light">
              Edit Video
            </DialogTitle>
            <DialogDescription className="text-gray-text font-light text-sm">
              Please update the video info.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1 items-start">
              <Label htmlFor="title" className="text-[11px]">
                Title:
              </Label>
              <Input
                id="title"
                {...register("title", { required: "Title is required" })}
                className={`border ${
                  errors.title ? "border-red-500" : "border-verido-border"
                } px-3 py-2 focus:outline-none`}
              />
              {errors.title && (
                <p className="text-red-500 text-xs">{errors.title.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-1 items-start">
              <Label htmlFor="vidoeID" className="text-[11px]">
                Video ID:
              </Label>
              <Input
                id="vidoeID"
                {...register("vidoeID", { required: "Video ID is required" })}
                className={`border ${
                  errors.vidoeID ? "border-red-500" : "border-verido-border"
                } px-3 py-2 focus:outline-none`}
              />
              {errors.vidoeID && (
                <p className="text-red-500 text-xs">{errors.vidoeID.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-1 items-start">
              <Label htmlFor="category" className="text-[11px]">
                Category:
              </Label>
              <Input
                id="category"
                {...register("category", { required: "Category is required" })}
                className={`border ${
                  errors.category ? "border-red-500" : "border-verido-border"
                } px-3 py-2 focus:outline-none`}
              />
              {errors.category && (
                <p className="text-red-500 text-xs">
                  {errors.category.message}
                </p>
              )}
            </div>
          </div>
          <DialogFooter>
            <Button
              className="w-full bg-verido-green"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Updating..." : "Update"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditVideo;
