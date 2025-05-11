import Header from "shared/Header";
import "features/Roles.css"; // Assuming you have a CSS file for styling

const Roles = () => {
    return (
        <>
            <section className="roles-section">
                <Header title="Roles" />
                <div className="roles-content">
                    <h2>Roles</h2>
                    <p>Manage user roles and permissions.</p>
                    {/* Add your roles management content here */}
                </div>
            </section>
        </>
    );
};

export default Roles;