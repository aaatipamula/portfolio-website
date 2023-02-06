export default function Card (title: string, description: string, languages: string) {
    return (
        <div>
            <div>{title}</div>
            <div>{description}</div>
            <div>{languages}</div>
        </div>
    )
}