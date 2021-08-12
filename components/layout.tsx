import Footer from "./footer";
import Header from "./header";

type Props = {
    children: React.ReactNode,
}

export default function Layout({ children }: Props) {
    return (
        <>
            <Header />
            <main className="pt-20 sm:pt-24 bg-white text-black dark:bg-black dark:text-white bg-opacity-90 max-w-full">{children}</main>
            <Footer />
        </>
    );
};
