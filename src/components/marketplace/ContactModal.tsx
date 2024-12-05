import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, X } from "lucide-react";

interface ContactModalProps {
  open?: boolean;
  onClose?: () => void;
  onSubmit?: (data: {
    name: string;
    email: string;
    budget: string;
    message: string;
  }) => void;
  influencerName?: string;
}

const ContactModal = ({
  open = true,
  onClose = () => {},
  onSubmit = () => {},
  influencerName = "Sarah Johnson",
}: ContactModalProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    onSubmit({
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      budget: formData.get("budget") as string,
      message: formData.get("message") as string,
    });
    form.reset();
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] bg-white">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-semibold">
              Contact {influencerName}
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-6 w-6 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="John Doe"
                required
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                required
                className="w-full"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="budget">Campaign Budget</Label>
            <Input
              id="budget"
              name="budget"
              type="text"
              placeholder="$1,000 - $5,000"
              required
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your campaign and collaboration ideas..."
              required
              className="min-h-[120px] w-full"
            />
          </div>

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="px-6"
            >
              Cancel
            </Button>
            <Button type="submit" className="px-6 gap-2">
              <MessageCircle className="h-4 w-4" />
              Send Message
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
