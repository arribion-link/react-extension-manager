
import Card from "./Card"

const Extensions = () => {
  return (
    <section className="extension-section">
      <div className="extension-container">
        <Card
          imgUrl=""
          extensionName="DevLens"
          extensionDescription="Quickly inspect page layouts and visualize element boundaries."
        />
        <Card
          imgUrl=""
          extensionName="StyleSpy"
          extensionDescription="Instantly analyze and copy CSS from any webpage element."
        />
        <Card
          imgUrl=""
          extensionName="SpeedBoost"
          extensionDescription="Optimizes browser resource usage to accelerate page loading."
        />
        <Card
          imgUrl=""
          extensionName="JSONWizard"
          extensionDescription="Formats, validates, and prettifies JSON responses in-browser."
        />
        <Card
          imgUrl=""
          extensionName="TabMaster Pro"
          extensionDescription="Organizes browser tabs into groups and sessions."
        />
        <Card
          imgUrl=""
          extensionName="ViewportBuddy"
          extensionDescription="Simulates various screen resolutions directly within the browser."
        />
        <Card
          imgUrl=""
          extensionName="Markup Notes"
          extensionDescription="Enables annotation and notes directly onto webpages for collaborative debugging."
        />
      </div>
    </section>
  );
}

export default Extensions
