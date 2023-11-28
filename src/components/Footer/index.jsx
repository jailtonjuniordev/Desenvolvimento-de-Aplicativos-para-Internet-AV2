export const Footer = () => {
    return (
        <footer className={'bg-gray-700 text-white text-center p-6 user-select-none w-full'}>
            <a className={'container mx-auto'} href="https://linktr.ee/dev.jailton" target="_blank" rel="noreferrer">
                Copyright © Jailton Júnior - Fullstack Developer 2021 - {new Date().getFullYear()}
            </a>
        </footer>
    )
}
