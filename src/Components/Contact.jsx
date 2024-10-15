import Nav from "./Nav";
const Contact = () => {
  return (
    <>
    <Nav/>
    <div id="ctParent">
      <h2>Member of Team</h2>
      <div id="team">
        <div className="Item">
          <h3>Member 1: Than The Loc</h3>
          <h3>StudentID: Student1571994</h3>
        </div>
        <div className="Item">
          <h3>Member 2: Vo Dinh Duy</h3>
          <h3>StudentID: Student1571992</h3>
        </div>
        <div className="Item">
          <h3>Member 3: Le Thanh Hoang</h3>
          <h3>StudentID: Student1574888</h3>
        </div>
      </div>

      <h2>Social Media</h2>
      <div id="media">
          <span>FACEBOOK</span>
          <span>YOUTUBE</span>
          <span>INSTAGRAM</span>
      </div>
    </div>
    </>
  );
}
 
export default Contact;