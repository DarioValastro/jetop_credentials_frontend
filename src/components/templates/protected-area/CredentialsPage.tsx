import React, { useState } from "react"
import { useServiceContext } from "../../../hooks/useServiceContext"
import { ServiceList } from "../../molecules/service-list/ServiceList"
import { NavBar } from "../../molecules/Nav-bar/NavBar"
//import Footer from "../../atoms/footer/Footer"
import Service from "../../../models/Service"

function CredentialsPage() {
  const [activeService, setActiveService] = useState<Service | null>(null)
  const Services = useServiceContext({ fetchOnLoad: true })

  if (Services.loading || !Services.data?.length) return null

  return (
    <div className={"CredentialsPage"}>
      <NavBar />
      <ServiceList
        services={Services.data}
        onItemClick={setActiveService}
        activeServiceId={activeService?.id}
      />
    </div>
  )
}

export default CredentialsPage
