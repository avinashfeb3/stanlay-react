import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Navbar />
        <main className="flex-grow p-6 bg-gray-100">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
