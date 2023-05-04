import Bio from '@/src/components/Bio';
import Hero from '@/src/components/Hero';
// import NavigationBar from '@/src/components/Navbar';
import Footer from '@/src/shared-components/Footer';

const Index = () => {
    return (
        <div>
            {/* <NavigationBar /> */}
            <Hero />
            <Bio />
            <Footer />
        </div>
    );
};

export default Index;
