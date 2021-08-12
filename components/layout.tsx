import Header from "./header";

type Props = {
    children: React.ReactNode,
}

export default function Layout({ children }: Props) {
    return (
        <>
            <Header />
            <main className="pt-20 sm:pt-24">{children}</main>
            <footer>
                <p>&copy; 2018 Odroe</p>
            </footer>
        </>
    );
};
