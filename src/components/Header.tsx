import type { HeaderProps } from "../models/course-goal";

export default function Header({src, alt, children}: HeaderProps) {
    return <header>
        <img src={src} height={'40px'} alt={alt} />
        {children}
    </header>
}