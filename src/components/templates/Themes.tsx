import { useTheme } from "next-themes"

export const mockUser0: User = {
  id: 0,
  name: "Hajime",
  gitHubUserName: "HajimexxxNakagawa",
}

export const mockUser1: User = {
  id: 1,
  name: "Kyoko",
  gitHubUserName: "",
}

export const mockUser2: User = {
  id: 2,
  name: "Yuji",
  gitHubUserName: "",
}

export const mockUserList = [mockUser0, mockUser1, mockUser2]

const THEMES = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
]

export const Themes = () => {
  const { theme, setTheme } = useTheme()

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setTheme(event.target.value)
  }

  return (
    <main
      className="flex flex-col justify-center items-center p-4 h-screen"
      onChange={handleChange}
    >
      <select className="w-full max-w-xs select select-bordered">
        <option disabled selected>
          Pick your favorite theme
        </option>
        {THEMES.map((themeName) => (
          <option key={themeName}>{themeName}</option>
        ))}
      </select>
      <div className="text-center prose">
        <h1>Play with daisyUI on Next.js!</h1>
        <h2>
          current theme is
          <span className="pl-2 text-primary">{theme}</span>
        </h2>
      </div>
      <UserTable users={mockUserList} />
    </main>
  )
}

export type User = {
  id: number
  name: string
  gitHubUserName?: string
}

export interface UserProps {
  user: User
}

export interface UserListProps {
  users: User[]
}

const UserTableItem = ({ user }: UserProps) => {
  const { id, name, gitHubUserName } = user
  const gitHubUserPage = `https://github.com/${gitHubUserName}`

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>
        {gitHubUserName ? (
          <a
            href={gitHubUserPage}
            target="_blank"
            rel="noreferrer"
            className="link link-secondary"
          >
            {gitHubUserName}
          </a>
        ) : (
          <span className="text-error">{"none"}</span>
        )}
      </td>
    </tr>
  )
}

export const UserTable = ({ users }: UserListProps) => {
  return (
    <table className="table shadow">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>GitHub</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <UserTableItem user={user} key={user.id} />
        ))}
      </tbody>
    </table>
  )
}
