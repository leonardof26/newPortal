/* eslint-disable no-restricted-globals */
import React, { useState, useEffect, useMemo } from 'react'
import { useImmer } from 'use-immer'

import PropTypes from 'prop-types'
import { format, parseISO, addMonths, setDate, addYears } from 'date-fns'
import pt from 'date-fns/locale/pt'

import { toast } from 'react-toastify'

import { MdAdd } from 'react-icons/md'
import { FaRegSave } from 'react-icons/fa'

import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import { Form } from '@unform/web'
import history from '../../../../services/history'
import { formatPrice } from '../../../../util/format'
import {
  saleProfiles,
  roles,
  pricing,
  monthHours,
} from '../../../../services/API/calls'

import Title from '../../../../components/Title'
import Button from '../../../../components/Button'
import Input from '../../../../components/Input'
import LoadingScreen from '../../../../components/LoadingPage'
import MaskInput from '../../../../components/Unform/MaskInput'

import {
  Container,
  TopInfo,
  StaticInfo,
  TopTotals,
  TableTitle,
  TableDiv,
  ResultsTable,
  RevenueTable,
  Select,
  SVG,
  AddButton,
  CostTable,
  ExpensesTable,
  Footer,
  SaveButton,
} from './styles'

const customStyles = {
  control: base => ({
    ...base,
    height: 27,
    minHeight: 27,
    position: 'initial',
  }),
}

export default function Edit({ location }) {
  const [revenueList, setRevenueList] = useImmer([])
  const [profileList, setProfileList] = useState([])
  const [roleList, setRoleList] = useState([])
  const [loading, setLoading] = useState(false)
  const [hideSave, setHideSave] = useState(false)
  const [pricDetails, setPricDetails] = useState({})
  const [monthsHours, setMonthsHours] = useState([])
  const [costList, setCostList] = useImmer([])
  const [expensesList, setExpensesList] = useImmer([])
  const [initialRevData, setInitialRevData] = useState([])
  const [initialCostData, setInitialCostData] = useState([])
  const [initialExpData, setInitialExpData] = useState([])

  const lastPageInfo = useMemo(() => {
    return location.state.pageInfo
  }, [location])

  const selectedPricing = useMemo(() => {
    return location.state.pric
  }, [location])

  const profileOpts = useMemo(() => {
    return profileList.map(prof => {
      return { label: prof.nmPerfil, value: prof.cdPerfil }
    })
  }, [profileList])

  const roleOpts = useMemo(() => {
    return roleList.map(role => {
      return { label: role.nmCargo, value: role.cdCargo }
    })
  }, [roleList])

  const totalRevenue = useMemo(() => {
    let hourlyValue = 0
    let alocatedValue = 0
    let totalValue = 0.0
    let descountedValue = 0

    revenueList.map(rev => {
      hourlyValue += rev.hourlyValue
      alocatedValue += parseInt(rev.alocatedHours, 10) || 0
      totalValue += parseFloat(rev.totalValue, 10)
      descountedValue += parseFloat(rev.descauntedValue, 10) || 0
      return rev
    })

    return {
      hourlyValue: hourlyValue.toFixed(2),
      alocatedValue,
      totalValue: totalValue.toFixed(2),
      descountedValue: descountedValue.toFixed(2),
      formHourlyValue: formatPrice(hourlyValue),
      formTotalValue: formatPrice(totalValue),
      formDescountedValue: formatPrice(descountedValue),
    }
  }, [revenueList])

  const projMonthDuration = useMemo(() => {
    let months
    const d1 = parseISO(pricDetails.dtInicioPrevista)
    const d2 = parseISO(pricDetails.dtFimPrevista)

    months = (d2.getFullYear() - d1.getFullYear()) * 12
    months -= d1.getMonth() + 1
    months += d2.getMonth() + 1
    return months <= 0 ? 1 : months + 1
  }, [pricDetails])

  const projMonths = useMemo(() => {
    const months = []
    let date = setDate(parseISO(pricDetails.dtInicioPrevista), 1)

    for (let i = 1; i <= projMonthDuration; i += 1) {
      const dateHour = monthsHours
        // eslint-disable-next-line
        .find(month => month.hasOwnProperty(date.getFullYear()))
        [date.getFullYear()].find(
          // eslint-disable-next-line
          year => year.dtMesReferencia === date.getMonth() + 1
        )

      const data = {
        month: `${format(date, 'MMM', { locale: pt })}/${date.getFullYear()}`,
        hours: dateHour ? dateHour.qtHorasUteis : 0,
        date,
      }

      months.push(data)

      date = addMonths(date, 1)
    }

    return months
  }, [monthsHours])// eslint-disable-line

  const totalCost = useMemo(() => {
    let resourceTotal = 0.0
    let hourTotal = 0

    costList.map(cost => {
      resourceTotal += parseFloat(cost.hourlyValue, 10) || 0
      hourTotal += parseInt(cost.totalHours, 10)

      return cost
    })

    // eslint-disable-next-line
    const hoursTotal = calcCostTotals()

    return {
      resourceTotal: resourceTotal.toFixed(2),
      hourTotal,
      hours: hoursTotal,
      formResourceTotal: formatPrice(resourceTotal),
    }
  }, [costList])// eslint-disable-line

  const totalExpenses = useMemo(() => {
    let total = 0

    expensesList.map(ex => {
      total += parseFloat(ex.value, 10) || 0

      return ex
    })

    return { value: total.toFixed(2), formatValue: formatPrice(total) }
  }, [expensesList])// eslint-disable-line

  const totalPage = useMemo(() => {
    let liquidRev = 0

    costList.map(cost => {
      liquidRev +=
        parseFloat(cost.hourlyValue, 10) * parseInt(cost.totalHours, 10)

      return cost
    })

    const floatRev = parseFloat(totalRevenue.descountedValue, 10)
    const costTotal =
      parseFloat(liquidRev, 10) + parseFloat(totalExpenses.value, 10)
    const md = floatRev - costTotal
    const result = (md * 100) / floatRev || 0

    return {
      liquidRev: liquidRev.toFixed(2),
      costTotal: costTotal.toFixed(2),
      md: md.toFixed(2),
      result: floatRev !== 0 ? result.toFixed(2) : '0.00',
      formatLiquidRev: formatPrice(liquidRev),
      formatCostTotal: formatPrice(costTotal),
      formatMd: formatPrice(md),
      formatResult: formatPrice(result),
    }
  }, [costList, totalCost, totalExpenses, totalRevenue])// eslint-disable-line

  const mediumHourlyCost = useMemo(() => {
    const medium = (
      parseFloat(totalRevenue.descountedValue, 10) /
      parseInt(totalRevenue.alocatedValue, 10)
    ).toFixed(2)
    return isNaN(medium)
      ? { value: 0, formattedValue: formatPrice(0) }
      : { value: medium, formattedValue: formatPrice(medium) }
  }, [totalRevenue])

  useScrollPosition(
    ({ _, currPos }) => {
      const maxHeight =
        Math.max(document.body.scrollHeight, document.body.offsetHeight) -
        document.body.clientHeight
      const isShow = currPos.y < -maxHeight + 30
      if (isShow !== hideSave) setHideSave(isShow)
    },
    [hideSave]
  )

  function calcCostTotals() {
    const totals = []

    for (let i = 0; i < projMonthDuration; i += 1) {
      let total = 0

      costList.map(cost => {
        total += parseFloat(cost.hours[i].value, 10) || 0

        return cost
      })

      totals.push(total)
    }

    return totals
  }

  function isNumeric(hourTxt) {
    const re = /^[0-9\b]+$/
    const cleanTxt = hourTxt.split(':').join('')
    return re.test(cleanTxt)
  }

  function generateCostId() {
    if (costList.length === 0) return 1

    const nextListNumber = costList[costList.length - 1].cdCusto + 1
    const maxPreExistNumber =
      initialCostData.length > 0
        ? initialCostData[initialCostData.length - 1].cdCusto + 1
        : 0

    return nextListNumber > maxPreExistNumber
      ? nextListNumber
      : maxPreExistNumber
  }

  function generateRevenueId() {
    if (revenueList.length === 0) return 1

    const nextListNumber = revenueList[revenueList.length - 1].cdReceita + 1
    const maxPreExistNumber =
      initialRevData.length > 0
        ? initialRevData[initialRevData.length - 1].cdReceita + 1
        : 0

    return nextListNumber > maxPreExistNumber
      ? nextListNumber
      : maxPreExistNumber
  }

  function addRevenueList() {
    const newRow = {
      revCode: generateRevenueId(),
      profile: null,
      hourlyValue: 0.0,
      alocatedHours: '',
      totalValue: 0.0,
      descauntedValue: 0.0,
      formatHourlyValue: formatPrice(0),
      formatTotalValue: formatPrice(0),
      formatDescauntedValue: formatPrice(0),
    }

    setRevenueList(draft => {
      draft.push(newRow)
      return draft
    })
  }

  function addCostList() {
    const hours = projMonths.map((proj, index) => {
      return {
        value: '',
        date: setDate(
          addMonths(parseISO(pricDetails.dtInicioPrevista), index),
          1
        ),
      }
    })

    const newRow = {
      rowCode: generateCostId(),
      resource: null,
      hourlyValue: 0.0,
      totalHours: 0,
      hours,
      formatHourlyValue: formatPrice(0),
    }

    setCostList(draft => {
      draft.push(newRow)
      return draft
    })
  }

  function checkDatesEqual(dateA, dateB) {
    return (
      dateA.getMonth() === dateB.getMonth() &&
      dateA.getFullYear() === dateB.getFullYear()
    )
  }

  function convertRevenueList(revenues) {
    return revenues.map(rev => {
      const [formattedHour] = rev.horasAlocadas.split(':')
      const selectedProf = profileList.find(
        prof => prof.cdPerfil === rev.cdPerfilVenda
      )

      return {
        revCode: rev.cdReceita,
        profile: {
          label: selectedProf.nmPerfil,
          value: selectedProf.cdPerfil,
        },
        hourlyValue: rev.vlPrecoHora,
        alocatedHours: formattedHour,
        totalValue: rev.vlTotal,
        descauntedValue: rev.vlTotalLiquido,
        formatHourlyValue: formatPrice(rev.vlPrecoHora),
        formatTotalValue: formatPrice(rev.vlTotal),
        formatDescauntedValue: formatPrice(rev.vlTotalLiquido),
      }
    })
  }

  function convertExpensesList(expenses) {
    return projMonths.map(month => {
      const monthDate = expenses.despesas.find(e =>
        checkDatesEqual(parseISO(e.dtReferencia), month.date)
      )

      return { value: monthDate ? monthDate.vlDespesa : '', date: month.date }
    })
  }

  function convertCostList(costData) {
    return costData.map(cost => {
      const selectedRes = roleList.find(role => role.cdCargo === cost.cdCargo)
      let totalResHours = 0

      const hours = projMonths.map(month => {
        const monthDate = cost.horasMes.find(c =>
          checkDatesEqual(parseISO(c.dtReferencia), month.date)
        )

        const [hour] = monthDate ? monthDate.horasAlocadas.split(':') : ''

        return { value: hour, date: month.date }
      })

      cost.horasMes.map(c => {
        totalResHours += parseInt(c.horasAlocadas, 10)

        return c
      })

      return {
        rowCode: cost.cdCusto,
        resource: { label: selectedRes.nmCargo, value: selectedRes.cdCargo },
        hourlyValue: cost.vlCustoMedio,
        totalHours: totalResHours,
        hours,
        formatHourlyValue: formatPrice(cost.vlCustoMedio),
      }
    })
  }

  async function getPrincingDetails() {
    const resp = await pricing.getPrincingDetails(
      selectedPricing.cdPrecificacao
    )

    const pric = resp.data

    setPricDetails({
      ...pric,
      formattedStartDate: format(parseISO(pric.dtInicioPrevista), 'dd/MM/yyyy'),
      formattedEndDate: format(parseISO(pric.dtFimPrevista), 'dd/MM/yyyy'),
    })
  }

  async function getRevenueData() {
    const resp = await pricing.getRevenueData(selectedPricing.cdPrecificacao)

    setInitialRevData(resp.data)

    const initialRevList = convertRevenueList(resp.data)

    setRevenueList(draft => {
      draft = initialRevList
      return draft
    })

    if (initialRevList && initialRevList.length === 0) {
      await addRevenueList()
    }
  }

  async function getCostData() {
    const resp = await pricing.getCostData(selectedPricing.cdPrecificacao)

    setInitialCostData(resp.data)

    const initCostList = convertCostList(resp.data)

    setCostList(draft => {
      draft = initCostList
      return draft
    })

    if (initCostList && initCostList.length === 0) {
      addCostList()
    }
  }

  async function getExpensesData() {
    const resp = await pricing.getExpensesData(selectedPricing.cdPrecificacao)

    setInitialExpData(resp.data)

    setExpensesList(draft => {
      draft = convertExpensesList(resp.data)

      return draft
    })
  }

  async function getRoleList() {
    const resp = await roles.getRoles()

    setRoleList(resp.data)

    return resp.data
  }

  async function getProfileList() {
    const resp = await saleProfiles.getProfileList(selectedPricing.cdCliente) // MUDAR ESSA LINHA

    setProfileList(resp.data)

    return resp.data
  }

  async function getMonthHours() {
    const data = []
    let date = parseISO(pricDetails.dtInicioPrevista)
    const nmbYears =
      parseISO(pricDetails.dtFimPrevista).getFullYear() -
      parseISO(pricDetails.dtInicioPrevista).getFullYear() +
      1

    for (let i = 0; i < nmbYears; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      const resp = await monthHours.getHours(date.getFullYear())

      data.push({ [date.getFullYear()]: resp.data })

      date = addYears(date, 1)
    }

    setMonthsHours(data)
  }

  async function handleInitialData() {
    setLoading(true)

    await getProfileList()
    await getRoleList()
    await getPrincingDetails()
  }

  async function handleGetMotnhHours() {
    await getMonthHours()
  }

  function createCurrentRevPayload() {
    return revenueList
      .filter(rev => rev.profile)
      .map(rev => {
        return {
          cdReceita: rev.revCode,
          cdPrecificacao: selectedPricing.cdPrecificacao,
          cdPerfilVenda: rev.profile.value,
          vlPrecoHora: rev.hourlyValue,
          horasAlocadas: parseInt(rev.alocatedHours, 10) || 0,
          vlTotal: parseFloat(rev.totalValue, 10),
          vlTotalLiquido: parseFloat(rev.descauntedValue, 10),
          dtReferencia: setDate(parseISO(pricDetails.dtInicioPrevista), 1),
        }
      })
  }

  function createRevPayload() {
    const currentRev = createCurrentRevPayload().filter(
      curr => curr.horasAlocadas > 0
    )

    const modRev = initialRevData
      .filter(rev => !currentRev.find(curr => curr.cdReceita === rev.cdReceita))
      .map(exc => {
        return {
          ...exc,
          horasAlocadas: 0,
        }
      })

    const finalPayload = []

    finalPayload.push(...currentRev, ...modRev)

    return finalPayload
  }

  function createCurrentCostPayload() {
    return costList
      .filter(cost => cost.resource)
      .map(cost => {
        const hours = cost.hours
          .filter(h => {
            const originalCost = initialCostData.find(
              init => init.cdCusto === cost.rowCode
            )

            if (!originalCost)
              return parseInt(h.value, 10) && parseInt(h.value, 10) > 0

            const originalInput = originalCost.horasMes.find(org =>
              checkDatesEqual(parseISO(org.dtReferencia), h.date)
            )

            if (!originalInput)
              return parseInt(h.value, 10) && parseInt(h.value, 10) > 0

            return true
          })
          .map(h => {
            return {
              HorasAlocadas: parseInt(h.value, 10) || 0,
              dtReferencia: h.date,
            }
          })

        return {
          cdCusto: cost.rowCode,
          cdPrecificacao: selectedPricing.cdPrecificacao,
          cdCargo: cost.resource.value,
          vlCustoMedio: parseFloat(cost.hourlyValue, 10),
          horasMes: hours,
        }
      })
  }

  function createCostPayload() {
    const currentCost = createCurrentCostPayload().filter(
      curr => curr.horasMes.length > 0
    )

    const excludedCosts = initialCostData
      .filter(cost => !currentCost.find(curr => curr.cdCusto === cost.cdCusto))
      .map(cost => ({ ...cost, horasMes: null }))

    const finalPayload = []

    finalPayload.push(...currentCost, ...excludedCosts)

    return finalPayload
  }

  function createCurrentExpensesPayload() {
    return expensesList
      .filter(exp => {
        return parseFloat(exp.value, 10)
      })
      .map(exp => {
        return {
          vlDespesa: parseFloat(exp.value, 10).toFixed(2) || null,
          dtReferencia: exp.date,
        }
      })
  }

  function createExpensesPayload() {
    const currentExp = createCurrentExpensesPayload()

    const modExp = initialExpData.despesas
      .filter(
        e =>
          !currentExp.find(cur =>
            checkDatesEqual(cur.dtReferencia, parseISO(e.dtReferencia))
          )
      )
      .map(e => ({
        dtReferencia: e.dtReferencia,
        vlDespesa: 0,
      }))

    const finalPayload = []

    finalPayload.push(...currentExp, ...modExp)

    return {
      cdPrecificacao: selectedPricing.cdPrecificacao,
      despesas: finalPayload,
    }
  }

  function createTotalsPayload() {
    return {
      cdPrecificacao: selectedPricing.cdPrecificacao,
      horasProjeto: `${totalRevenue.alocatedValue}:00`,
      vlProjeto: totalRevenue.alocatedValue,
      vlHoraMedio: mediumHourlyCost.value,
      vlReceitaBruta: totalRevenue.totalValue,
      vlReceitaLiquida: totalRevenue.descountedValue,
      vlCustoFolha: totalPage.liquidRev,
      vlCustoDespesas: totalExpenses.value,
      vlCustoTotal: totalPage.costTotal,
      vlTotalLiquido: totalPage.md,
      pcResultado: totalPage.result,
      pcMargemLucro: (100.0 - parseFloat(totalPage.result, 10)).toFixed(2),
    }
  }

  async function saveRevenueData() {
    try {
      const payload = createRevPayload()

      await pricing.saveRevenueData(payload)

      getRevenueData()

      toast.success('Dados da tabela de Receita salvos com sucesso')
    } catch (error) {
      toast.error('Erro ao salvar dados da tabela de Receita', {
        autoClose: 10000,
      })
    }
  }

  async function saveCostData() {
    try {
      const payload = createCostPayload()

      await pricing.saveCostData(payload)

      getCostData()

      toast.success('Dados da tabela de Custos alterados com sucesso')
    } catch (error) {
      toast.error('Erro ao salvar dados da tabela de Custos', {
        autoClose: 10000,
      })
    }
  }

  async function saveExpensesData() {
    try {
      const payload = createExpensesPayload()

      await pricing.saveExpensesData(payload)

      getExpensesData()

      toast.success('Dados da tabela de Despesas alterados com sucesso')
    } catch (error) {
      toast.error('Erro ao salvar dados da tabela de Despesas', {
        autoClose: 10000,
      })
    }
  }

  async function saveTotals() {
    try {
      const payload = createTotalsPayload()

      await pricing.savePrecDetails(payload)

      toast.success('Totais salvos com sucesso')
    } catch (error) {
      toast.error('Erro ao salvar totais')
    }
  }

  function calcTotalCost(line) {
    let total = 0

    line.map(val => {
      total += parseInt(val.value, 10) || 0

      return val
    })

    return total
  }

  function deleteRevenue(index) {
    setRevenueList(draft => {
      draft.splice(index, 1)
      return draft
    })
  }

  function deleteCost(index) {
    setCostList(draft => {
      draft.splice(index, 1)
      return draft
    })
  }

  function handleRevInputChange(e, index) {
    e.persist()

    const inputValid = isNumeric(e.target.value)

    if (inputValid || e.target.value === '') {
      const totalValueCalc = (
        parseInt(e.target.value, 10) * revenueList[index].hourlyValue
      ).toFixed(2)

      const descountedCalc = (totalValueCalc * pricDetails.cdFator).toFixed(2)

      const newRow = {
        ...revenueList[index],
        alocatedHours: e.target.value,
        totalValue: isNaN(totalValueCalc) ? 0.0 : totalValueCalc,
        descauntedValue: isNaN(descountedCalc) ? 0.0 : descountedCalc,
        formatTotalValue: isNaN(totalValueCalc)
          ? formatPrice(0)
          : formatPrice(totalValueCalc),
        formatDescauntedValue: isNaN(descountedCalc)
          ? formatPrice(0)
          : formatPrice(descountedCalc),
      }

      setRevenueList(draft => {
        draft[index] = newRow
        return draft
      })
    }
  }

  function handleCostInputChange(e, index, ind) {
    e.persist()

    const inputValid = isNumeric(e.target.value)

    if (inputValid || e.target.value === '') {
      const hours = costList[index].hours.map((inp, i) => {
        if (ind === i) {
          return { ...inp, value: e.target.value }
        }
        return inp
      })

      const totalHours = calcTotalCost(hours)

      const newRow = {
        ...costList[index],
        hours,
        totalHours,
      }

      setCostList(draft => {
        draft[index] = newRow
        return draft
      })
    }
  }

  function handleProfileSelection(profile, index) {
    const profileCost = profileList.find(
      prof => prof.cdPerfil === profile.value
    ).vlCusto

    const totalValueCalc = (
      revenueList[index].alocatedHours * profileCost
    ).toFixed(2)

    const descountedCalc = (totalValueCalc * pricDetails.cdFator).toFixed(2)

    const newRow = {
      ...revenueList[index],
      profile,
      hourlyValue: profileCost,
      totalValue: isNaN(totalValueCalc) ? 0.0 : totalValueCalc,
      descauntedValue: isNaN(descountedCalc) ? 0.0 : descountedCalc,
      formatHourlyValue: formatPrice(profileCost),
      formatTotalValue: isNaN(totalValueCalc)
        ? formatPrice(0)
        : formatPrice(totalValueCalc),
      formatDescauntedValue: isNaN(descountedCalc)
        ? formatPrice(0)
        : formatPrice(descountedCalc),
    }

    setRevenueList(draft => {
      draft[index] = newRow
    })
  }

  function handleResourceSelection(resource, index) {
    const hourlyValue = roleList.find(res => resource.value === res.cdCargo)
      .vlMedio

    const newRow = {
      ...costList[index],
      resource,
      hourlyValue,
      formatHourlyValue: formatPrice(hourlyValue),
    }

    setCostList(draft => {
      draft[index] = newRow
    })
  }

  function handleExpensesInputChange(values, index) {
    setExpensesList(draft => {
      draft[index].value = values.value
      return draft
    })
  }

  async function handleSaveData() {
    await saveCostData()
    await saveRevenueData()
    await saveExpensesData()
    await saveTotals()
  }

  async function handleInitialTableData() {
    await getCostData()
    await getRevenueData()
    await getExpensesData()

    setLoading(false)
  }

  async function handleSubmit() {
    setLoading(true)

    await handleSaveData()

    setLoading(false)
  }

  async function handleSendToApproval() {
    setLoading(true)

    try {
      await pricing.saveRevenueData(createRevPayload())
      await pricing.saveCostData(createCostPayload())
      await pricing.saveExpensesData(createExpensesPayload())
      await pricing.savePrecDetails(createTotalsPayload())
      await pricing.sendToApproval(createTotalsPayload())

      toast.success('Projeto salvo e enviado para aprovação')
    } catch (error) {
      toast.error('Erro ao mandar projeto para aprovação')
    }

    setLoading(false)
  }

  useEffect(() => {
    handleInitialData()
  }, [])// eslint-disable-line

  useEffect(() => {
    handleGetMotnhHours()
  }, [pricDetails])// eslint-disable-line

  useEffect(() => {
    if (projMonths.length > 0) {
      handleInitialTableData()
    }
  }, [projMonths]) // eslint-disable-line

  return (
    <Container>
      {loading && <LoadingScreen />}
      <Title>Precificação Projeto: {selectedPricing.nmProjeto}</Title>

      <Form onSubmit={handleSubmit}>
        <TopInfo>
          <StaticInfo>
            <div>
              <p>Nível Desconto:</p>
              <Input
                name="nivel"
                disabled
                value={pricDetails.qtPercDesconto || ''}
              />
            </div>
            <div>
              <p>Data Inicio Desenvolvimento:</p>
              <Input
                name="begin"
                disabled
                value={pricDetails.formattedStartDate || ''}
              />
            </div>
            <div>
              <p>Data Fim Desenvolvimento:</p>
              <Input
                name="end"
                disabled
                value={pricDetails.formattedEndDate || ''}
              />
            </div>
          </StaticInfo>
          <TopTotals>
            <div>
              <span>Prazo Projeto:</span>
              <span>Horas Projeto:</span>
              <span>Valor Projeto:</span>
              <span>Valor Hora Médio:</span>
            </div>
            <div>
              <span>{pricDetails.qtDiasProjeto} dias</span>
              <span>{totalRevenue.alocatedValue} horas</span>
              <span>{totalRevenue.formDescountedValue}</span>
              <span>{mediumHourlyCost.formattedValue}</span>
            </div>
          </TopTotals>
        </TopInfo>
      </Form>

      <TableDiv>
        <div>
          <TableTitle>Resultado</TableTitle>
          <ResultsTable>
            <thead>
              <tr>
                <th>Receita Bruta</th>
                <th>Receita Liquida</th>
                <th>Custo Folha</th>
                <th>Custo Despesa</th>
                <th>Custo Total(F + D)</th>
                <th>MD(RL - CT)</th>
                <th>Resultado (%)</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>{totalRevenue.formTotalValue}</td>
                <td>{totalRevenue.formDescountedValue}</td>
                <td>{totalPage.formatLiquidRev}</td>
                <td>{totalExpenses.formatValue}</td>
                <td>{totalPage.formatCostTotal}</td>
                <td>{totalPage.formatMd}</td>
                <td>{totalPage.result}%</td>
              </tr>
            </tbody>
          </ResultsTable>
        </div>
      </TableDiv>

      <TableDiv>
        <div>
          <TableTitle>Receita</TableTitle>

          <Form>
            <RevenueTable>
              <thead>
                <tr>
                  <th />
                  <th>Cód.</th>
                  <th>Recurso/Perfil</th>
                  <th>Valor Hora</th>
                  <th>Total Horas Alocadas</th>
                  <th>Valor Total</th>
                  <th>Valor Total c/ Desconto</th>
                </tr>
              </thead>

              <tbody>
                {revenueList.map((rev, index) => (
                  <tr key={`rev${rev.revCode}`}>
                    <td>
                      <SVG onClick={() => deleteRevenue(index)}>
                        <span>X</span>
                      </SVG>
                    </td>
                    <td>{index + 1}</td>
                    <td>
                      <Select
                        menuPosition="fixed"
                        value={rev.profile}
                        styles={customStyles}
                        name={`profile${index}`}
                        options={profileOpts}
                        onChange={option =>
                          handleProfileSelection(option, index)
                        }
                      />
                    </td>
                    <td>{rev.formatHourlyValue}</td>
                    <td>
                      <MaskInput
                        id={`rev${rev.revCode}`}
                        name={`rev${rev.revCode}`}
                        className="hourInput"
                        onChange={e => handleRevInputChange(e, index)}
                        maxLength={4}
                        autoComplete="off"
                        defaultValue={revenueList[index].alocatedHours || ''}
                      />
                    </td>
                    <td>{rev.formatTotalValue}</td>
                    <td>{rev.formatDescauntedValue}</td>
                  </tr>
                ))}

                <tr>
                  <td colSpan="7">
                    <AddButton onClick={addRevenueList}>
                      <MdAdd size={29} />
                      <span>Adicionar novo recurso</span>
                    </AddButton>
                  </td>
                </tr>
              </tbody>

              <tfoot>
                <tr>
                  <td colSpan="3">TOTAL</td>
                  <td>{totalRevenue.formHourlyValue}</td>
                  <td>{totalRevenue.alocatedValue}</td>
                  <td>{totalRevenue.formTotalValue}</td>
                  <td>{totalRevenue.formDescountedValue}</td>
                </tr>
              </tfoot>
            </RevenueTable>
          </Form>
        </div>
      </TableDiv>

      <TableDiv scroll>
        <div>
          <TableTitle>Custo</TableTitle>

          <Form>
            <CostTable>
              <thead>
                <tr>
                  <th rowSpan="2" />
                  <th rowSpan="2">N°</th>
                  <th rowSpan="2">Recurso/Cargo</th>
                  <th rowSpan="2">Custo médio Recurso</th>
                  <th rowSpan="2">Total Horas Alocadas</th>
                  {projMonths.map(proj => (
                    <th key={`m${proj.month}`}>{proj.month}</th>
                  ))}
                </tr>
                <tr>
                  {projMonths.map(proj => (
                    <th key={`h${proj.month}`}>{proj.hours}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {costList.map((cost, index) => (
                  <tr key={`cl${index.toString()}`}>
                    <td>
                      <SVG onClick={() => deleteCost(index)}>
                        <span>X</span>
                      </SVG>
                    </td>
                    <td>{index + 1}</td>
                    <td>
                      <Select
                        menuPosition="fixed"
                        value={cost.resource}
                        styles={customStyles}
                        name={`resource${index}`}
                        options={roleOpts}
                        onChange={option =>
                          handleResourceSelection(option, index)
                        }
                      />
                    </td>
                    <td>{cost.formatHourlyValue}</td>
                    <td>{cost.totalHours}</td>
                    {cost.hours.map((proj, ind) => (
                      <td key={`codHours${cost.rowCode}${ind}`}>
                        <MaskInput
                          id={`costH${cost.rowCode}`}
                          className="hourInput"
                          name={`costH${cost.rowCode}${ind}`}
                          maxLength={3}
                          autoComplete="off"
                          onChange={e => handleCostInputChange(e, index, ind)}
                          defaultValue={proj.value || ''}
                        />
                      </td>
                    ))}
                  </tr>
                ))}

                <tr>
                  <td colSpan={(projMonthDuration || 0) + 5}>
                    <AddButton onClick={addCostList}>
                      <MdAdd size={29} />
                      <span>Adicionar novo recurso</span>
                    </AddButton>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="3">TOTAL</td>
                  <td>{totalCost.formResourceTotal}</td>
                  <td>{totalCost.hourTotal} </td>
                  {totalCost.hours.map((tot, ind) => (
                    <td key={`tot${ind.toString()}`}>{tot}</td>
                  ))}
                </tr>
              </tfoot>
            </CostTable>

            <ExpensesTable>
              <thead>
                <tr>
                  <th />
                  <th colSpan="2">Total</th>
                  {projMonths.map(proj => (
                    <th key={`t${proj.month}`}>{proj.month}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>DESPESAS</td>
                  <td colSpan="2">{totalExpenses.formatValue}</td>
                  {expensesList.map((ex, index) => (
                    <td key={`e${index}`}>
                      <MaskInput
                        name={`e${index}`}
                        prefix="R$"
                        decimalSeparator=","
                        thousandSeparator="."
                        onValueChange={values =>
                          handleExpensesInputChange(values, index)
                        }
                        maxLength="10"
                        autoComplete="off"
                        defaultValue={ex.value || ''}
                      />
                    </td>
                  ))}
                </tr>
              </tbody>
            </ExpensesTable>
          </Form>
        </div>
      </TableDiv>

      <Footer>
        <Button
          onClick={() =>
            history.push({
              pathname: '/menufoursys/pricing',
              state: { pageInfo: lastPageInfo },
            })
          }
        >
          Voltar
        </Button>
        <Button type="submit" onClick={handleSubmit}>
          Salvar
        </Button>

        <Button darken onClick={handleSendToApproval}>
          Mandar Para Aprovação
        </Button>
      </Footer>

      <SaveButton botton={hideSave} type="submit" onClick={handleSubmit}>
        <FaRegSave />
      </SaveButton>
    </Container>
  )
}

Edit.propTypes = {
  location: PropTypes.object.isRequired,
}
