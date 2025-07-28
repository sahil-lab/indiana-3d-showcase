import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            Connect With Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to find your dream property? Our expert team is here to guide you every step of the way
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-gold rounded-full mx-auto flex items-center justify-center">
                <span className="text-2xl text-white">📞</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Call Us</h3>
                <p className="text-muted-foreground">+91 98765 43210</p>
                <p className="text-muted-foreground">+91 87654 32109</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary to-primary rounded-full mx-auto flex items-center justify-center">
                <span className="text-2xl text-white">✉️</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Email Us</h3>
                <p className="text-muted-foreground">info@heritagehomes.in</p>
                <p className="text-muted-foreground">sales@heritagehomes.in</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-royal rounded-full mx-auto flex items-center justify-center">
                <span className="text-2xl text-white">📍</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Visit Us</h3>
                <p className="text-muted-foreground">Heritage Tower</p>
                <p className="text-muted-foreground">Connaught Place, New Delhi</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Contact Form */}
        <Card className="max-w-2xl mx-auto mt-12 bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-foreground">Get In Touch</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">First Name</label>
                <Input placeholder="Enter your first name" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Last Name</label>
                <Input placeholder="Enter your last name" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Email</label>
              <Input type="email" placeholder="Enter your email address" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Phone</label>
              <Input placeholder="Enter your phone number" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Message</label>
              <Textarea placeholder="Tell us about your property requirements..." rows={4} />
            </div>
            
            <Button variant="saffron" className="w-full text-lg py-3">
              Send Message
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};