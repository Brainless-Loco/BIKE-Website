// These are collection names of Firebase's Firestore database.
// Look up the firebase console for data structure and organization.
const CollectionNames = {
    slides: 'slides',
    affiliates: 'affiliates',
    items: 'items',
    blogs: 'blogs',
    events: 'events',
    pending_members: 'pending_members',
    collection_counter: 'collection_counter'
}

// Make all sorts of error messages here. Do not hard-code texts. This kind of practice helps us to reuse resources.
const ErrorMessages = {
    internal_error: 'Internal error',
    server_no_response: 'The server didn\'t respond.\nPlease check your internet connection or try again later.',
    file_not_found: 'The requested file doesn\'t exist or has been removed.'
}

// Make warning messages here.
const WarningMessages = {
    invalid_email: 'The email you\'ve entered is either not associated with an account or is invalid.'
}

// Commonly used string data
const Strings = {
    placeholder_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ' +
                        'magna aliqua. Duis convallis convallis tellus id interdum. Morbi enim nunc faucibus a pellentesque sit. ' +
                        'Quisque non tellus orci ac auctor. Pharetra et ultrices neque ornare. Aliquam nulla facilisi cras fermentum ' +
                        'odio eu. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Ultrices gravida dictum fusce ' +
                        'ut placerat orci. Ultrices neque ornare aenean euismod elementum nisi. Sit amet massa vitae tortor. Enim ' +
                        'facilisis gravida neque convallis a. Vitae ultricies leo integer malesuada nunc. Montes nascetur ridiculus mus ' +
                        'mauris vitae ultricies leo. Sed cras ornare arcu dui.',
    phone_hint: '+88 01X-YYYY-ZZZZ',
    more_frequently_used_text: 'Your text here',
    placeholder_image_link: 'https://picsum.photos/128?random=1',
    base64Img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAO7UlEQVR4nNVbe3CU13X/nft9++1Lu3ojkBBP8xA2xoAB4zgxAgxKMQQnlo2hcpLGru26tcc1cTqeuoNnnExTPzNNgjuJXY/tglsa14S6JDE24mET7BQbzKPFICyeQkJIrLTP77v39I99r3allbRimjNzZlf3cfae33ncc+/3iTDC1PNg0yhTWAuIeT6EqCPdNglKjWVWTmK2sVJ2EiIMTe9iITogzRZY1gFAHJJsfVLx8pZzI7k+Ggmh3Q81zoUUd8CwrWEzMnk4ssjuOMmW+Y4y+e3yX7z1UaHWmJBfKEFtTU1uwxFoIt32BJvWxELJTSUy7K0qHP6pzZT/7H39PzoLInO4As40NjpdRer70MR6SOkpxKIGJE0PEasXNdBzxa9suTwcUUMGgAHq+vbqNawbL8KMVA1nEUMmTQuA8WTZhJn/SBs2qKGIGBIA3U0rJ0ph28SWddNQ5heayO44TMHQurLNvz406LmDndCxZsUKaPpbULJosHNHkkhoJhP+ovLNrb8c1Lx8B3Jjo9ahBX5IjB+AefArvEpEduON8pDtPtqyJZLX+HwGcWOj1kH+zZCqcXjLuzpEhvGB2csrq7dtCww4dqABvGiR3l5ZtAWmubowy7s6RA7nJ9qV8NLy7dt9/Y7rr5MbG7V20/dvkOqbhV3e1SEyjA87hGvxtf2Eg96fgPZQ19+z4j9K5QGAQ6GvVDjEawDW5hqT0wPONyy+gwhv/39OeHmTpq8f8+57z2frygrA2SW3TCXdOCCUdI/syq4OkdAkWeacqvf39KkT+gCwYcMGYVX/4V+/t6nrThsJiBE5Ll19IpfzVKg3MmNic3MotV3LHFj0hPO+tmL+QZ02HkUt7RAAiBn4I2eOmKWaTZMvtHzZnAZM6h937FhSrixXi2TLO8GoxqNPH4UmFWxCQIyEWa422fSIaWLChD17LsSb0nYB07Q9DlheAPgych4H1s7BnNc+hpIKRoFBIJcLWkUZqFyA3GGArkKyVazb5KUnsQd/lVhH/MvS95YWu5XjnExJfMW6F08+3w6j0wcCYBdiyMdHcrqgL14Mnj0batp0sDslv7IFoS7CMPfBFn4PIvghoEK5hQ2DiDQJoca55wTOAyke4JC2BySnZ/0rlg8775uFZT/aBQYQkmrQIFBxMejORmDpUlguV45BOpRWg5B2J0KOO0FFnXD4X4Lh3wKwNXgtU0UTIESMCSCSGgnvQ0DgKSDFA1b/dlWrpcxxmQJ00vE3mxglB88AAATy9wSaNw/0yCOg0tJEm2KgrZfRFWIELcBSjCKD4LYBNR6CoSUla1YLXF0PQ5hfDEPhLIOE57J2bXslERQBwO2/WT4fLPbnEjpbTMa69buS8zEwCKKpCbRmTWIFvjDjwAWJU90SEZljDgFjvQJzxuiockfnEfvh6n4MevCDoSucjZhW6bMC26J5TWrruJ+K71N1EidXzYaSDCUZlmQETQklGZyFac09oHvuAYigGPj9mQjePBjE4YsR+MMSppWdw6bEyU4TWw4Hsf2LMMISYHLDX7IRlrM+obCmATYbYDeibNMBTQxCeQCwla8DosaETrZVrABWjFxAbK0XULoASwWWClIqhCwLKvZ3nKm+HuLeJgBA2GJsPRbAvtMhhE0LppU//097GJsP9qIrqADSECx5EbprytAVziQ2lwIALXt72ShNFxeJAFAsKcS/Z/zCXa0TMPe5nWltggAHRcOBykqhv/YK4PFAMeNXh/04ddkcxioBr13g3rkeuGwCmnUcFb6VAOeIoUGSxjxJaAJfg2KwAqCSxRMYfbzh3UntCIwpSbO4tBRCloxa/4H7AU/0YnjnyQCOt4dyunu+3Ok38atDPWAGpD4VQaNwh1NFttuEUnQDx5SNcgyIBCfDwi8D2PXovJSxUbaUQqikGGLJYgDA5YDER6d6YUlZEG7pDOHztmhd4Hc9Au7/FJ83sV56szDIqEtYXwFQnOEFsc8YELuLWnDplml9hGlfbwBp0aPFjuM+hM3hWT6T3/tfX9QLxBiYtnkFAQBkTBcCog4ZCrNipIWFSvZLJbH9T2v6yDJu/SoAwJSMQ+f9iFhWQfmiL4TT3dGLnbCxtDD6c7hWV6wqWXEs8VEs+QFRp4/nAAIhBgIBR7gVR++Zi2mb/xDt1nToU64BALT6GP7Q8BJfLjreaWF8qYGIbWFB5LHsqdAtS7o4pj+DQaCo2hwDggAiBsfBiXbh3a8CE7faofvDoPG1IJsNmqahw2/BtAqTpTPpbFcITmc5woHRhRHIYUNIqRzRGE9JeooxUFhckt3Y9+B8WGCQwwkA8Hq96OwNFzT2U7mtyw+PxwMWxWDYC4KBDsXglBog5uXRzD9AWOyadBnXjqtAGTN0XYfT6YQ/bMKUwzvA5KLeUCTxOyxcIBUetkxdkAhKZbmj7k4Jt08CkjssghxG85/PxKo3zsPhcAAASt3GiIWAxyAopeCw6xCquyAydQE9CLbc/SU9ECcqw4SHxMYf8JzF7MnFmBUDoNJjHzEASpw6TNOEXeuGSqx1OKRJXYfWGWJUDJT0coWFIsbvlhho6OiAUVODeZMrIKUckdv0WWM9kFIC5u8LI1Av7dKV4qOseFo26xLnERYAWkU79oePoh41GOV1YspoL46c6SrMImNk6AKzar3R6rN318AT8iASjnPCHwl8lqj0Ylk+/VyQUiJn2y1i4/7zzPaE4G/fOgWmtArKDddVwmVo0CgC9r1TEACY+biuGJ9TzPTZrBv1gv7DggThyKWjOHb5GOrK6lB/bQ1m1pbhwKmOgizU67Th7vljAQA2/ybAKsjrQSDle1/outoNpn6tm6gFOHuJHD8nbPxsY+Lg9GzTQngd+rD3fqUU/vb26Siy69ApAHS+VBDlAUCYV3Zqp945FZzxzeu+E5FmCZC8JCQgtu0lCoD0vti3xDgAncFOCCFwfeX1KHLYcF21B785eAbBiAWleNBMAB5vmI5bp48CAJSGn4EIfVgg7d1+7fqexwUAWFK+M5B1k16AlDzByXExfvPIm9h3fh8AYMH0sXj1vptQW+Yc1G2QaVlw2gjP3j0LK2+oBgB0dG+D3rupILozAyyqmoHYo7HqFbUdxPQAkNu6Ga3pbZzsYWbsPbcX473jMb54PMo8Tiyvq4DbruPw2W4Ewv17gyDgrgXj8eO7Z+Oaqujlyn+1bsVCbSPsNLzYjxqJwEpAyd6/fOafwi0JPRpeWXnWbwZq4ldilLHfp39SHI0+fYhtm0IIrJuxFmtnrEWgN4Cenh6ETYl9Jy6h+VgbWtp70O4LIWIpVBU7UFPqwi3TqrCorgolLgMA4Df9+JcTb2C27QhuL92OoVLUSynBIE/AfuKCl+6CTABQv3H5ExZbP05XJmZpQRl3hSlAZNwlZgI3qXQS/mzmdzHDMwM+X79vqyRIKomP2/fjrVObYecgXp1+EBoPrq6IWxtMsbBNAkDGxJedNxx8KK4SAGDRzxYVkeZot5QZPdr1Y92sl6cDADemaAwaJi7HFNcUVNmqoFH6g2mTTbT2tOLTy59i78U96A53g5jxkxkuTBXvD07xFGUTIMS9AIZkGaz2fKW3PQ0AAFj68p/8Q8gKfT9f6w42LOKydE1Htbs6AUKEI2jrvQDTNJO/wYyby0rwVPVvB7wFTlo7HuMZysdZATDGve2Zd/Bb8blpt4tWMPAjw+F8KGKFizj1AJRS/AAc+06JIintwJRSRMWrpdQiCgSY0sLpntNpwElTJnYaIoYgwqO154B+DlaconBS0dwgAC5T9J5/OFVG2hPv5seau5Xi9X2uxtO2vpQtMLVETtwm91NE5bp1VrGnStGfAjNw//gKeK2D2RVXgJIEJUWUlYCMf5daoi3RH2Po5c8V1Xe05QQAAJo7bvqF2+Y+lvVqPLUW4IxaINszhTyBY4vTgCsxbFhZnP6okhlQimKKan2Uy6Zwahu0URc9l3ufztSXMhsAYMFPvjbFTo7DFltG3kkvHuvIbMvIJ/FUkZJP2FSxEjoaRs9fX4KZYntC8X6TWmp72jikjLcpIZxzS+u/+CxT16wvfex/dPcXxPTggNblbNZNd/0+YaFSLB+rPpWM9oEJNxR7cZ34AEpRupv3se5AXpDsh61qQzblc3pAnBo2fuP1KyFfUz7WTXhDinX7ekiKN8TGReNfJdxs040KZebHeSW1aBtytEf7hL12R/mt+5dRSm4e0APi5Ck3vus1PDvzsS5nsW7OR20pt86J5MeMteMrURr5JO+kplT/sQ999KGL7b0rcik/oAcAwNwNK10VlbTHF+6ZM1jr5qwdkJyrzOg/erhtGt6adQG6eTpLTKfEe9qWl9zfM/d8YR9zQleXbiy7reVKf/r1eU8wky40Hzdr54953e0tXhi2wpMy8cv2clefA1PiQEXpiMe8gYjw1IxKjJX/DVYiB0cPMcxZ+jilXwkIo/oQy9Z5lcvO9gykX15vvjVvaA55K43lXnvxprwfpA4UFgwoKzpmsrsIN4q9eSe17Ekx+kn2cTt8Zuf80csv+vPRbcAQyKTFL339fpOtn1vK0oeS9FLDQlkKBODVuUUYFfkwr6SW3AYztkCyseYY83ejb9v9zGD0GTQAALDguSUzih3ubb5Qz6SstUBcan+7BUerv9trR+PBkh0piif3/fQ6PglCJjCafVSbpXpW1644mvNFr1w0pJc/969//2jxKPtUj8PzuEN3BvuEhRo4LFgCGgjfqWjN2O9zuLrq2w+yS8099tlzp61xQ1EeGKIHpNKiFxeVOI3S53vCvfdKzj8slFT467qxWES/65vV4ye3Pm1RAUS60lw1/x4JnHhs3DfOnB/O+ocNQJwWvrC8rNJV+ljICjzcE+4p7TcswKiwO/DLqa1gsyujhE0vcpInOYKwef3CXrbZunL66bHfOnG2EOsuGAAJ2rBBLPDsaqj2Vn0vYAYX+UK+ssxagJnx09mjMTa4O6lkFhDABKEX+YWj4iMVan95jLvi11TfXNBHz4UHIIMWvrDoGqfubCh2l9wMVnVBKzzuGodFT43+vISVojgAILsFcgRYuNtIcx5my79Xhdp31qz+8mB/ldxw6f8AyoT16XrVhekAAAAASUVORK5CYII=',
}

// Commonly used status
const Status = {
    OK: 'OK',
    Err: 'error',
    Warn: 'warning'
}

// Add more commonly used attributes here, such as dimentions, numbers, placeholders etc.








// Frequently used numbers
const Constants = {
    // Data limits
    dataLimitXSM: 5,
    dataLimitSM: 10,
    dataLimitM: 25,
    dataLimitL: 50,
    dataLimitXL: 100,

    // Powers of two limits
    limit64: 64,
    limit128: 128,
    limit256: 256,
    limit512: 512,
}

// Alphabet, since js has no char type -_-
const CharNumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const CharAlphaLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
                        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
                        'u', 'v', 'w', 'x', 'y', 'z'];
const CharAlphaUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 
                        'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
                        'U', 'V', 'W', 'X', 'Y', 'Z'];

                        // date: Date
export const toISODate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    
    return year + '-' + String(month).padStart(2, '0') + '-' + String(day).padStart(2, 0);
}

export {CollectionNames, ErrorMessages, WarningMessages, Strings, Status, Constants, CharNumber, CharAlphaLower, CharAlphaUpper};