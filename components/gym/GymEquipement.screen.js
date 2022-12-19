import AreaView from 'utils/TabAreaView'
import SimpleCard from 'components/cards/SimpleCard'
import { GridLayout } from 'styles/grid.module'

import { useQuery } from 'react-query'
import { __query, baseUrl } from 'hooks/useApi'
import { LogBox } from 'react-native'

export default function GymEquipementScreen({ route }) {
  const { _equipement } = route.params

  const { data } = useQuery('@gym-equipement', gymEquipementFetcher, {
    refetchOnMount: true,
    initialData: _equipement,
  })

  return (
    <AreaView>
      <GridLayout>
        {data.map((el) => {
          return (
            <SimpleCard
              key={el.id}
              title={el.gym_equipement_name}
              image={`${baseUrl}storage/gym/equipments/${el.gym_equipment_image}`}
            />
          )
        })}
      </GridLayout>
    </AreaView>
  )
}

let gymEquipementFetcher = function () {
  return __query
    .get('api/gym/equipments')
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.message)
    })
}
LogBox.ignoreAllLogs(true)
