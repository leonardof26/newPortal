import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './route'

import Login from '../pages/Login'
import Main from '../pages/Main'

import HourAppointment from '../pages/CCH/HourAppointment'
import HistoryAppointment from '../pages/CCH/HistoryAppointment'

import AlocationList from '../pages/FoursysMenu/AlocationMap/List'
import AlocationEdit from '../pages/FoursysMenu/AlocationMap/Edit'
import PricingList from '../pages/FoursysMenu/Pricing/List'
import PricingEdit from '../pages/FoursysMenu/Pricing/Edit'

import Profiles from '../pages/Parametrization/Profiles'
import MonthlyHour from '../pages/Parametrization/MonthlyHour'
import Roles from '../pages/Parametrization/Roles'
import Technology from '../pages/Parametrization/Technology'
import AccessProfile from '../pages/Parametrization/AccessProfile'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/login" component={Login} />

      <Route
        path="/cch/hourAppointment"
        component={HourAppointment}
        isPrivate
      />
      <Route
        path="/cch/historyAppointment"
        component={HistoryAppointment}
        isPrivate
      />

      <Route
        path="/menufoursys/alocation"
        exact
        component={AlocationList}
        isPrivate
      />
      <Route
        path="/menufoursys/alocation/edit"
        exact
        component={AlocationEdit}
        isPrivate
      />
      <Route
        path="/menufoursys/pricing"
        exact
        component={PricingList}
        isPrivate
      />
      <Route
        path="/menufoursys/pricing/edit"
        exact
        component={PricingEdit}
        isPrivate
      />

      <Route
        path="/parametrizacao/perfilvenda"
        component={Profiles}
        isPrivate
      />
      <Route
        path="/parametrizacao/monthlyhours"
        component={MonthlyHour}
        isPrivate
      />
      <Route path="/parametrizacao/roles" component={Roles} isPrivate />
      <Route
        path="/parametrizacao/technology"
        component={Technology}
        isPrivate
      />
      <Route
        path="/parametrizacao/accessprofile"
        component={AccessProfile}
        isPrivate
      />
    </Switch>
  )
}
