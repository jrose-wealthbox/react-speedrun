import { createRoot } from 'react-dom/client'

const user = {
  name: "Alex Rivera",
  gender: "Non-binary",
  age: 34,
  hometown: "Portland",
  state: "OR",
};

function UserCard({ name, gender, age, hometown, state }) {
  return (
    <div className="card">
      <p className="name">{name}</p>
      <p className="location">
        {hometown}, {state}
      </p>
      <div className="stats">
        <div>
          <div className="stat-label">Age</div>
          <div className="stat-value">{age}</div>
        </div>
        <div>
          <div className="stat-label">Gender</div>
          <div className="stat-value">{gender}</div>
        </div>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<UserCard {...user} />);
