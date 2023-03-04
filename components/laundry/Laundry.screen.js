import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import { laundry } from 'mock/laundry'
import { Line, SpaceBetweenRow, StyledLaundryRow } from 'styles/list.module'

export default function LaundryScreen() {
  return (
    <AreaView>
      {laundry.map((el) => {
        return (
          <StyledLaundryRow key={el.id}>
            <Text content={el.clothe_type} size={21} weight={600} up={'cap'} />
            {el.dry_clean && (
              <SpaceBetweenRow>
                <Text content={'dry cleaning'} size={16} />
                <Text content={`${el.dry_clean}$`} color={'dominant'} weight={600} size={16} />
              </SpaceBetweenRow>
            )}
            {el.dry_clean && <Line />}
            {el.pressing && (
              <SpaceBetweenRow>
                <Text content={'pressing'} size={16} />
                <Text content={`${el.pressing}$`} color={'dominant'} weight={600} size={16} />
              </SpaceBetweenRow>
            )}

            {el.laundry && el.pressing && <Line />}
            {el.laundry && (
              <SpaceBetweenRow>
                <Text content={'laundry'} size={16} />
                <Text content={`${el.laundry}$`} color={'dominant'} weight={600} size={16} />
              </SpaceBetweenRow>
            )}
          </StyledLaundryRow>
        )
      })}
    </AreaView>
  )
}
